import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../Helpers/sendMail";
import Connection from "../Helpers/database";
const db = new Connection();
dotenv.config();

interface Diagnosis {
    id: number,
    name_treatment: string,
    drug_administered: string,
    doctor_name: string,
    patient_email: string,
    bill: number,
    date: string,
    paid: string,
    description: string,
    patient_status: string,
    issent: string
}


const diagnosisEmail = async () => {


    const diagnosis: Diagnosis[] = await (await db.exec("checkDiagnosis")).recordset;

    for (let diagnose of diagnosis) {

        ejs.renderFile("templates/Diagnosis.ejs",
            { name: diagnose.name_treatment, description: diagnose.description },
            async (err, data) => {

                let messageoption = {
                    from: process.env.EMAIL,
                    to: diagnose.patient_email,
                    subject: `Hello here is the treatment ${diagnose.name_treatment}`,
                    html: data,

                    attachments: [
                        {
                            filename: "diagnosis.txt",
                            content: `${diagnose.description}`
                        }
                    ]
                }


                try {

                    await sendMail(messageoption);
                    await db.exec("updateDiagnosisSentEmail");

                } catch (error) {

                    console.log(error)
                }
            }

        )

    }
}

export default diagnosisEmail;