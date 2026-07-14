import { Request, Response } from "express";

const tareas = [
  {
    id: 1,
    titulo: "Estudiar pruebas",
    completada: false
  },
  {
    id: 2,
    titulo: "Hacer ejercicio",
    completada: true
  }
];

export function obtenerTareas(
  _req: Request,
  res: Response
): void {
  res.status(200).json(tareas);
}
