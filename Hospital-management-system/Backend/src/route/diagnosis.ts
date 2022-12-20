import {Router} from 'express';
import { createDiagnosis } from '../controller/Diagnosis';
import { verifyToken } from '../middlewares/verifyToken';



const router = Router();


router.post('/',createDiagnosis);


export default router;