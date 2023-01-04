import { Router } from 'express';
import { createDiagnosis, getDiagnoisForUser, updateDiagnosis } from '../controller/Diagnosis';
import { verifyToken } from '../middlewares/verifyToken';



const router = Router();


router.post('/', createDiagnosis);
router.put('/:id', updateDiagnosis);
router.post('/user', getDiagnoisForUser)


export default router;