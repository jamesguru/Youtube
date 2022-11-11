import express, { Request, Response } from "express";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import Connection from "../helpers/database";
import { loginSchema, registerSchema } from "../helpers/userValidation";
import { User } from "../interfaces/User";
const db = new Connection();

export const signIn = async (req: User, res: Response) => {
  const { email, password } = req.body;
  try {
    const { error, value } = loginSchema.validate(req.body);

    const user = await db.exec("signin", {email});

    if (!user?.recordset[0]) {
      return res.status(200).json({ message: "notfound" });
    }

    const userData = user?.recordset[0] as {
      id: number;
      name: string;
      email: string;
      password: string;
      role: string;
    };

    bycrpt.compare(password, userData.password, (err, data) => {
      if (data) {
        const { email, name, id, role, ...others } = userData;

        const user = { role, name, id, email };

        const token = jwt.sign(user, process.env.KEY as string, {
          expiresIn: "14 days",
        });

        res.status(200).json({ user, token });
      } else {
        res.status(400).json({ message: "wrong password" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req: User, res: Response) => {
  const { name, email, password } = req.body;

  console.log(name,email,password)


  try {
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      res.status(400).json(error.details[0].message);
    }

    const userIndatase = await db.exec("userLookUp", { email });
    if (userIndatase.recordset.length) {
      res.status(200).json({ message: "exist" });
    } else {
      const hashedPassword = await bycrpt.hash(password, 10);
      await db.exec("signup", { name, email, password:hashedPassword});
      res.status(201).json({message:"User registered successfully"})
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllUsers = (req: Request, res: Response) => {};
