import ejs from "ejs";
import mssql from "mssql";
import dotenv from "dotenv";
import Connection from "../helpers/database";
import { sqlconfig } from "../config/config";
import sendMail from "../helpers/sendMail";
dotenv.config();

const db = new Connection();

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  register: number;
}

const WelcomeEmail = async () => {
  const users: User[] = await (await db.exec("userCheck")).recordset;

  for (let user of users) {
    ejs.renderFile(
      "templates/welcome.ejs",
      { name: user.name },
      async (err, data) => {
        let messageoption = {
          from: process.env.EMAIL,
          to: user.email,
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

          await db.exec("updateUser", { id: user.id });
        } catch (error) {}
      }
    );
  }
};

export default WelcomeEmail;
