import express, { json, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { orderRoute, userRoute } from "./route";

const app = express();

dotenv.config();

app.use(json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message) {
    res.status(400).json({ message: err.message });
  }

  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
