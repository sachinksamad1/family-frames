import { Router } from "express";
import { upload } from "../middlewares/upload";
import { createFamilyPhoto } from "../controllers/aiController";

const router = Router();
router.post("/generate", upload.array("photos"), createFamilyPhoto);
export default router;
