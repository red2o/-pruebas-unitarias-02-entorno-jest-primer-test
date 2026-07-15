import { Request, Response } from "express";

let tareas = [
  {
    id: 1,
    titulo: "Estudiar pruebas",
    completada: false,
    descripcion: "Estudiar pruebas unitarias usando Jest"
  },
  {
    id: 2,
    titulo: "Hacer ejercicio",
    completada: true,
    descripcion: "Correr 30 minutos a 10 km/h"
  }
];

export function obtenerTareas(_req: Request, res: Response) {
  return res.status(200).json(tareas);
}

export function crearTarea(req: Request, res: Response) {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({
      mensaje: "El titulo y la descripcion son obligatorios"
    });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion,
    completada: false
  };

  tareas.push(nuevaTarea);

  return res.status(201).json(nuevaTarea);
}
