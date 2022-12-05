import  {Request,Response} from 'express'

export const createAppointment = (req:Request,res:Response) => {


    res.status(200).json({message:'you hit the appointment'})

}

export const getAppointments =(req:Request,res:Response) =>{

    res.status(200).json({message:'you hit the appointment'})
}