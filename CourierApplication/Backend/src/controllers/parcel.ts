import express, { Response, Request } from "express";

export const getAllParcels = (req: Request, res: Response) => {
  res.status(200).json({ message: "request granted" });
};

export const updateParcel = (req: Request, res: Response) => {};

export const deleteParcel = (req: Request, res: Response) => {};

export const addPost = (req: Request, res: Response) => {};
