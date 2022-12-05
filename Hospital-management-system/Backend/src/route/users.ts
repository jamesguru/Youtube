import { Router } from "express";
import { signUp } from "../controller/Users";

const router = Router();

router.post("/signup", signUp);

export default router;
