import {Router} from 'express';
import { createPatient } from '../controller/Patient';


const router = Router();


router.post('/',createPatient);


export default router;