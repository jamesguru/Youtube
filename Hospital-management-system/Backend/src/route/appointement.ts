import {Router} from 'express';
import { createAppointment, getAppointments } from '../controller/Appointment';

const router = Router();


router.post('/',createAppointment);
router.get('/',getAppointments)


export default router;