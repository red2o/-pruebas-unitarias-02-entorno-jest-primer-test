import express from "express";
import { obtenerTareas } from "../controllers/tareas.controller";

const router = express.Router();

router.get("/tareas", obtenerTareas);

export default router;
