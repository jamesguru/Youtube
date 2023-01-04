import ejs from 'ejs';
import dotenv from 'dotenv';
import sendMail from '../Helpers/sendMail';
import Connection from '../Helpers/database';
const db = new Connection();
dotenv.config();


interface Appointment {

    id: number,
    patient_name: string,
    doctor_email: string,
    date: string,
    patient_email: string,
    issent: number,
}


const AppointmentEmail = async () => {

    const appointments: Appointment[] = await (await db.exec('checkAppointment')).recordset;

    for (let appointment of appointments) {

        ejs.renderFile("templates/Appointment.ejs",
            { name: appointment.patient_name, date: appointment.date },

            async (err, data) => {
                let messageoption = {
                    from: process.env.EMAIL,
                    to: appointment.doctor_email,
                    subject: "You have an appointment",
                    html: data,


                };

                try {


                    await sendMail(messageoption);
                    await db.exec("updateAppointment");

                } catch (error) {
                    console.log(error)
                }
            }

        )
    }

}

export default AppointmentEmail;