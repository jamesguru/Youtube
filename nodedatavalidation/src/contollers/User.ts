import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../helpers/userValidation";

export const signUp = (req: Request, res: Response) => {
  const { error, value } = registerSchema.validate(req.body);

  if (error) {
    res.json(error.details[0].message);
  } else {
    console.log(value);
  }
};

export const signIn = (req: Request, res: Response) => {
  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    res.json(error.details[0].message);
  } else {
    console.log(value);
  }
};
