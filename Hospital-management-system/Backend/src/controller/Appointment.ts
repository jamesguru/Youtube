import  {Request,Response} from 'express'
import Connection from '../helpers/dabatase'

const db = new Connection()

export const createAppointment = async (req:Request,res:Response) => {

const {patient_name,doctor_email,date,patient_email} =req.body;
try {
    
    await db.exec('addAppointment',{patient_name,doctor_email,date,patient_email});

    res.status(201).json({message:'appointment added successfully'})
} catch (error) {
    
    res.status(500).json({message:"something went wrong"});
}

   
}

export const getAppointments =(req:Request,res:Response) =>{


}