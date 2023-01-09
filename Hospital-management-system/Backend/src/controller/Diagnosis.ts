import { Request, RequestHandler, Response } from "express";
import Connection from "../helpers/dabatase";

const db = new Connection();

export const createDiagnosis = async (req: Request, res: Response) => {


  const {
    name_treatment,
    drug_administered,
    doctor_name,
    patient_email,
    bill,
    date,
    paid,
    description,
    patient_status,
  } = req.body;



  console.log(req.body)
  try {
    await db.exec("addDiagnosis", {
      name_treatment,
      drug_administered,
      doctor_name,
      patient_email,
      bill,
      date,
      paid,
      description,
      patient_status,
    });

    res.status(201).json({ message: "diagnosis has been added successfully" });
  } catch (error) {

    console.log(error)
    res.json({ error: error });
  }
};

export const updateDiagnosis: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  try {
    await db.exec("updateDiagnosis", { id });

    res.status(201).json({ message: "diagnosis updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

export const getDiagnoisForUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const diagnosis = await (
      await db.exec("getDiagnosisForUser", { email })
    ).recordset;

    res.status(200).json(diagnosis);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
