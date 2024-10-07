import express from "express";
import { createEstudiantes,deleteEstudiantes,getEstudiantes, getEstudiantesById, updateEstudiantes } from "../controllers/estudiantesController.js";

const router = express.Router();

router.post("/",createEstudiantes);
router.get("/",getEstudiantes);
router.get("/:id",getEstudiantesById);
router.put("/:id",updateEstudiantes);
router.delete("/:id",deleteEstudiantes)

export default router;