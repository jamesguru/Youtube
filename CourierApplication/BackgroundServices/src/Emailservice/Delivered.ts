import ejs from "ejs";
import mssql from "mssql";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail";
import Connection from "../helpers/database";
const db = new Connection();
dotenv.config();

interface Parcel {
  id: number;
  senderEmail: string;
  receiverEmail: string;
  location: string;
  trackId: string;
  destination: string;
  dispatchedDate: string;
  weight: number;
  price: number;
  markers: string;
  status: number;
  deleted: number;
}

const DeliveredEmail = async () => {
  const parcels: Parcel[] = (await db.exec("checkParcel")).recordset;


  for (let parcel of parcels) {
    ejs.renderFile(
      "templates/Delivered.ejs",
      { trackId: parcel.trackId },
      async (err, data) => {
        let messageoption = {
          from: process.env.EMAIL,
          to: parcel.senderEmail,
          subject: "Welcome to SENDIT",
          html: data,

          attachments: [
            {
              filename: "sendIt.txt",
              content: "Welcome",
            },
          ],
        };

        try {
          await sendMail(messageoption);
          await db.exec("updateParcelStatus");
        } catch (error) {
          console.log(error);
        }
      }
    );

    ejs.renderFile(
      "templates/Delivered.ejs",
      { trackId: parcel.trackId },
      async (err, data) => {
        let messageoption = {
          from: process.env.EMAIL,
          to: parcel.senderEmail,
          subject: "Welcome to SENDIT",
          html: data,

          attachments: [
            {
              filename: "sendIt.txt",
              content: "Welcome",
            },
          ],
        };

        try {
          await sendMail(messageoption);
          await db.exec("updateParcelStatus");
        } catch (error) {
          console.log(error);
        }
      }
    );
  }
};

export default DeliveredEmail;
