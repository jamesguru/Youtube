import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { parcelRoute, userRoute } from "./routes";
const app = express();
app.use(cors());
dotenv.config();

app.use('/api/user',userRoute);
app.use('/api/parcel',parcelRoute)

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  if (err.message) {
    res.status(500).json({ message: err.message });
  }

  res.status(400).json({ message: err.message });
});


const PORT = process.env.PORT;

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
