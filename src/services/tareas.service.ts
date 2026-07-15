export type Tarea = {
  id: number;
  titulo: string;
  completada: boolean;
  descripcion: string;
};

let tareas: Tarea[] = [
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

export function obtenerTodasLasTareas(): Tarea[] {
  return tareas;
}

export function crearTarea(data: Omit<Tarea, "id">): Tarea {
  const nueva: Tarea = {
    id: tareas.length + 1,
    ...data
  };

  tareas.push(nueva);

  return nueva;
}

export function limpiarTareas(): void {
  tareas = [];
}
