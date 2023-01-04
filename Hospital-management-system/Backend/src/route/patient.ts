import {Router} from 'express';
import { createPatient, deletePatient, getPatients, updatePatient } from '../controller/Patient';


const router = Router();


router.post('/',createPatient);
router.get('/',getPatients);
router.put('/:id',updatePatient);
router.delete(':/id',deletePatient)


export default router;