import express from 'express';
import dotenv from 'dotenv'
import cron from 'node-cron'
import WelcomeEmail from './Emailservice/Welcome';
import DeliveredEmail from './Emailservice/Delivered';


const app = express()


const run =() => {

    cron.schedule('* * * * *', () => {

        WelcomeEmail()
        DeliveredEmail()
    })

}

run();

app.listen(8000, () =>{

    console.log('background services run on port 8000');
})