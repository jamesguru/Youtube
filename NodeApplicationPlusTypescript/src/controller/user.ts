import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).json({ message: " get all users" });
};

export const addUser = (req: Request, res: Response) => {
  res.status(201).json({ message: "new user is added" });
};
