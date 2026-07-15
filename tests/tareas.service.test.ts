import {
  obtenerTodasLasTareas,
  crearTarea,
  limpiarTareas
} from "../src/services/tareas.service";

describe("Servicio de tareas", () => {
  it("Debe obtener, crear y limpiar tareas", () => {
    const tareasIniciales = obtenerTodasLasTareas();

    expect(Array.isArray(tareasIniciales)).toBe(true);
    expect(tareasIniciales.length).toBeGreaterThan(0);

    const nueva = crearTarea({
      titulo: "Probar servicio",
      descripcion: "Comprobar la logica interna",
      completada: false
    });

    expect(nueva).toHaveProperty("id");
    expect(nueva.titulo).toBe("Probar servicio");
    expect(nueva.completada).toBe(false);

    limpiarTareas();

    expect(obtenerTodasLasTareas()).toEqual([]);
  });
});
