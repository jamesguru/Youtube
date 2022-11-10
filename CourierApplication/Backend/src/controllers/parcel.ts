import express, { Response, Request, RequestHandler } from "express";
import Connection from "../helpers/database";
import { Extended } from "../interfaces/Parcel";

const db = new Connection();

export const getAllParcels = async (req: Extended, res: Response) => {
  try {
    const parcels = await db.exec("getAllParcels");
    res.status(200).json(parcels.recordset);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateParcel: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const { status } = req.body;
  try {
    await db.exec("updateParcel", { id, status });
    res.status(200).json({ message: "Parcel updated successfully" });
  } catch (error) {
    res.status(500).json("something went wrong");
  }
};

export const softDelete:RequestHandler<{id:string}> = async (req:Request,res:Response) => {
const id = req.params.id;
const {deleted}=req.body;
try {
  
  await db.exec('softdelete',{id,deleted});
  res.status(200).json('parcel was deleted successfully');
} catch (error) {
  res.status(500).json('something went wrong')
}

};

export const addParcel = async (req: Request, res: Response) => {

  const {senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers} =req.body;

  try {
    await db.exec('addParcel',{senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers});

    res.status(201).json({message:'parcel has been added successfully'});
    
  } catch (error) {
    
  }

};

export const getParcelsForUser = async (req: Request, res: Response) => {

  const {email} = req.body;


  try {

    const parcels = await db.exec('getParcelsForUser',{email});

    res.status(200).json(parcels.recordset);
    
  } catch (error) {
    res.status(500).json('something')
  }
};
