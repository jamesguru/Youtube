import { Router } from "express";
import { addOder, getAllOrders } from "../controller/order";

const router = Router();

router.get("/", getAllOrders);

router.post("/", addOder);

export default router;
