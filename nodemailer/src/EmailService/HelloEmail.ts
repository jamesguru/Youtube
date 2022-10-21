import dotenv from "dotenv";
import sendMail from "../Helpers/sendmail";
import ejs from "ejs";

dotenv.config();

const sendHelloEmail = async (name: string, email: string) => {
  ejs.renderFile("templates/Hello.ejs", { name }, async (error, data) => {
    let messageoption = {
      from: process.env.EMAIL,
      to: email,
      subject: `Hello ${name}`,
      html: data,
      attachments: [
        {
          filename: "Hello.txt",
          content: `Hello ${name}`,
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
