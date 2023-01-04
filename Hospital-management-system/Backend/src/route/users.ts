import { Router } from "express";
import { deleteUsers, getDoctors, getUsers, signIn, signUp } from "../controller/Users";

const router = Router();
router.post("/signup", signUp);
router.post("/signin",signIn);
router.get("/",getUsers);
router.delete("/:id",deleteUsers);
router.get("/getdoctors",getDoctors)

export default router;
