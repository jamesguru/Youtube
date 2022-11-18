import express, { json } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import {userRoute} from './routes';


const app = express();
app.use(cors())
dotenv.config()
app.use(json())


app.use('/api/user',userRoute);

const PORT=process.env.PORT
app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`)
})