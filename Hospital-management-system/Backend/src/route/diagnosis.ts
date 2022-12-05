import {Router} from 'express';
import { createDiagnosis } from '../controller/Diagnosis';


const router = Router();


router.post('/',createDiagnosis);


export default router;