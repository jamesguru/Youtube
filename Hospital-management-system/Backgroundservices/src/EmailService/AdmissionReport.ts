import ejs from 'ejs';
import mssql from 'mssql';
import dotenv from 'dotenv';
import sendMail from '../Helpers/sendMail';
import Connection from '../Helpers/database';
import { parse } from 'json2csv';

const db = new Connection();
dotenv.config();


interface Patient {
    id: number;
    name: string;
    resident_area: string;
    room_admitted: string;
    admission_no: string;
    id_no: number;
    email: string;
    issent: number;
    status: string;
}

const ReportEMail = async () => {

    const patients: Patient[] = await (await db.exec('checkPatient')).recordset;

    if (patients.length) {

        const csv = parse(patients);

        ejs.renderFile('templates/Report.ejs', async (err, data) => {

            let messageoption = {

                from: process.env.EMAIL,
                to: process.env.EMAIL,
                subject: "HI HERE IS YOUR REPORT",
                html: data,

                attachments: [
                    {
                        filename: "DailyReport.csv",
                        contents: csv
                    }
                ]
            }


            try {

                await sendMail(messageoption);

                await db.exec('updatePatientEmailSent');
            } catch (error) {

                console.log(error);

            }
        })
    }


}

export default ReportEMail;