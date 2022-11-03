import express,{Router} from 'express';
import { signIn, signUp } from '../controllers/user';

const route = Router();


route.post('/signup',signUp);
route.post('/signin',signIn)

export default route;