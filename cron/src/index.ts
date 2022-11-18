import express from 'express';
import cron from 'node-cron';

const app = express();


const schedule =() =>{

    cron.schedule('* * * * * *',()=>{

        console.log('My server is running every minute');
    })
}

schedule()

app.listen(3000, () => {

    console.log('server is running on port 3000')
})