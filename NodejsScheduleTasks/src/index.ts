import express from "express";
import cron from "node-cron";

const app = express();

const run = () => {

    cron.schedule('1 * * * * * *', () =>{

        console.log('We are running this schedule');
    })
};

run();

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
