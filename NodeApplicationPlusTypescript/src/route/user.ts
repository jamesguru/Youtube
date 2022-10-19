import { Router } from "express";
import { addUser, getAllUsers } from "../controller/user";

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);

export default router;
