import express, { Router } from 'express';
import { addPost, deleteParcel, getAllParcels, getParcelsForUser, updateParcel } from '../controllers/parcel';
import { verifyToken } from '../middlewares/verifytoken';

const route = Router()

route.get('/',getAllParcels);
route.post('/',addPost);
route.put('/:id',updateParcel);
route.put('/softdelete/:id',deleteParcel);
route.post('/userparcels',getParcelsForUser)

export default route;