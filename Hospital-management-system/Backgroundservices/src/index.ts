import express from 'express';
import cron  from 'node-cron';
import dotenv from 'dotenv'
const app = express();
dotenv.config();


const run = () => {
    
    cron.schedule('* * * * *', () => {
        console.log('running a task every minute');
      });

}

run();
const PORT = process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Backgroundservices is running on port ${PORT}`)
})