import express,{json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {usersRoute,appointmentRoute,diagnosisRoute,patientRoute} from './route'

const app = express();
dotenv.config()
app.use(json())
app.use(cors())

app.use('/api/appointments',appointmentRoute);
app.use('/api/users',usersRoute)
app.use('/api/diagnosis',diagnosisRoute);
app.use('/api/patients',patientRoute)

const PORT = process.env.PORT;

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`)
})