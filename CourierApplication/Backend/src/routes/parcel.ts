import express, { Router } from 'express';
import { addParcel, softDelete, getAllParcels, getParcelsForUser, updateParcel } from '../controllers/parcel';
import { verifyToken } from '../middlewares/verifytoken';

const route = Router()

route.get('/',verifyToken,getAllParcels);
route.post('/',verifyToken,addParcel);
route.put('/:id',updateParcel);
route.put('/softdelete/:id',softDelete);
route.post('/userparcels',getParcelsForUser)

export default route;