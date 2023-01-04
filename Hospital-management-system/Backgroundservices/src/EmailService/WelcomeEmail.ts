import ejs from 'ejs';
import dotenv from "dotenv";
import Connection from '../Helpers/database';
import sendMail from '../Helpers/sendMail';
dotenv.config();
const db = new Connection();

interface User {
    id: number,
    name: string,
    email: string,
    role: string,
    issent: number
}


const WelcomeEmail = async () => {

    const users: User[] = await (await db.exec("checkUser")).recordset;

    for (let user of users) {


        ejs.renderFile('templates/Welcome.ejs', { name: user.name }, async (err, data) => {


            let messageoption={
                from:process.env.Email,
                to:user.email,
                subject:"Welcome to Medics Venns",
                html:data,
            }

            try {

                await sendMail(messageoption);
                await db.exec("updateUserEmailSent")
                
            } catch (error) {
                console.log(error)
            }
        })
    }

}

export default WelcomeEmail;