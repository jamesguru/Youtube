import dotenv from "dotenv";
import sendMail from "../Helpers/sendmail";
import ejs from "ejs";
import  {parse} from "json2csv"


dotenv.config();

const sendHelloEmail = async (name: string, email: string) => {

//some data
const data = 
[{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"},
{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"},
{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"},
{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"},
{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"},
{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"},
{relation:"father",name:"Anakin Skywalker",register:'yes',payed:'Yes',meeting:"attended"}]; 
//conver the data to CSV with the column names
const csv = parse(data);


  ejs.renderFile("templates/Hello.ejs", { name }, async (error, data) => {
    let messageoption = {
      from: process.env.EMAIL,
      to: email,
      subject: `Hello ${name}`,
      html: data,
      attachments: [
        {
          filename: "file.csv",
          content: csv,
        },
      ],
    };

    try {
      await sendMail(messageoption);
    } catch (error) {
      console.log(error);
    }
  });
};
export default sendHelloEmail;
