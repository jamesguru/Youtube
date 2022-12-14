import { Request, Response } from "express";
import Connection from "../helpers/dabatase";
import { registerSchema } from "../helpers/userValidation";
import bcrypt from 'bcrypt';

const db = new Connection();

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await db.exec('signUp',{name,email,password:hashedPassword});

    res.status(201).json({message:"Registered successfully"})


  } catch (error) {

    res.status(500).json({message:"Something went wrong"});
  }
};
