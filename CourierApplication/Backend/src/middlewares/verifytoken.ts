import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Data } from "../interfaces/User";
dotenv.config();

interface Extended extends Request {
  info?: Data;
}

export const verifyToken = (
  req: Extended,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["token"] as string;

    if (!token) {
      return res.json({ message: "You are not authenticated" });
    }

    const data = jwt.verify(token, process.env.KEY as string) as Data;

    req.info = data;
  } catch (error) {
    return res.status(500).json({ error });
  }

  next();
};
