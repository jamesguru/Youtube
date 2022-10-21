import express from 'express';
import dotenv from 'dotenv';
import cron from 'node-cron';
import sendHelloEmail from './EmailService/HelloEmail';

const app = express();

dotenv.config();


const run = () => {


    cron.schedule('* * * * *', () => {


        sendHelloEmail('James','jameskagunga15@gmail.com')

    })
}

run()



const PORT = process.env.PORT;
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)
})
