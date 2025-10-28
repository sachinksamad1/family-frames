import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import { createFamilyPhoto } from "../controllers/aiController.js";

const router = Router();
router.post("/generate", upload.array("photos"), createFamilyPhoto);
export default router;
