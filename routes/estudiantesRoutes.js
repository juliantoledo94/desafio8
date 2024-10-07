import express from "express";
import { createEstudiantes,getEstudiantes } from "../controllers/estudiantesController.js";

const router = express.Router();

router.get("/",getEstudiantes);
router.post("/",createEstudiantes);

export default router;