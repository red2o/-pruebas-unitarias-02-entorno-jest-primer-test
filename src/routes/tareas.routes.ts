import express from "express";
import {
  obtenerTareas,
  crearTarea
} from "../controllers/tareas.controller";

const router = express.Router();

router.get("/tareas", obtenerTareas);
router.post("/tareas", crearTarea);

export default router;
