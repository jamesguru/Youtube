import { Request, Response } from "express";

export const getAllOrders = (req: Request, res: Response) => {
  res.status(200).json({ message: "all orders" });
};

export const addOder = (req: Request, res: Response) => {
  res.status(201).json({ message: "added order successfully" });
};
