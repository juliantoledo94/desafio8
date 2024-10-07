import express from "express";
import { createCursos, getCursos } from "../controllers/cursosController.js";

const router = express.Router();

router.get("/",getCursos)
router.post("/",createCursos)

export default router