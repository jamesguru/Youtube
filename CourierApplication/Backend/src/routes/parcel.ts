import express, { Router } from 'express';
import { addPost, deleteParcel, getAllParcels, updateParcel } from '../controllers/parcel';

const route = Router()

route.get('/', getAllParcels);
route.post('/',addPost);
route.delete('/delete',deleteParcel);
route.put('/:id',updateParcel)

export default route;