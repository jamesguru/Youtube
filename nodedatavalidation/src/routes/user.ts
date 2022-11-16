import {Router} from 'express';
import { signIn, signUp } from '../contollers/User';

const router = Router();


router.post('/signup',signUp)
router.post('/signin',signIn)

export default router;