import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/ai", aiRoutes);

export default app;
