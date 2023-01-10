import express from 'express';
import cron  from 'node-cron';
import dotenv from 'dotenv'
import ReportEMail from './EmailService/AdmissionReport';
import WelcomeEmail from './EmailService/WelcomeEmail';
import AppointmentEmail from './EmailService/Appoitment';
import diagnosisEmail from './EmailService/Diagnosis';
const app = express();
dotenv.config();


const run = () => {
    
    cron.schedule('* * * * *', () => {
        
        ReportEMail();
        WelcomeEmail();
        AppointmentEmail();
        diagnosisEmail();

      });

}

run();
const PORT = process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Backgroundservices is running on port ${PORT}`)
})