import type { Request, Response } from "express";
import { generateFamilyPhoto } from "../utils/geminiClient.js";

export const createFamilyPhoto = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const { style } = req.body;
    const result = await generateFamilyPhoto(files, style);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
