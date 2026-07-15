import express from "express";
import {
  getTareas,
  postTarea
} from "../controllers/tareas.controller";

const router = express.Router();

router.get("/tareas", getTareas);
router.post("/tareas", postTarea);

export default router;
