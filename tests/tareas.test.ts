import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../src/app";

describe("GET /tareas", () => {
  it("Debe responder con un arreglo de tareas", async () => {
    const response = await request(app).get("/tareas");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("titulo");
    expect(response.body[0]).toHaveProperty("completada");
  });
});

describe("POST /tareas", () => {
  it("Debe crear una tarea cuando se envia titulo y descripcion", async () => {
    const nuevaTarea = {
      titulo: "Aprender mocks",
      descripcion: "Estudiar mocks y stubs en Jest"
    };

    const response = await request(app)
      .post("/tareas")
      .send(nuevaTarea);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.titulo).toBe(nuevaTarea.titulo);
    expect(response.body.descripcion).toBe(nuevaTarea.descripcion);
    expect(response.body.completada).toBe(false);
  });

  it("Debe responder con 400 si falta algun campo obligatorio", async () => {
    const tareaInvalida = {
      titulo: "Tarea sin descripcion"
    };

    const response = await request(app)
      .post("/tareas")
      .send(tareaInvalida);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("mensaje");
    expect(response.body.mensaje).toMatch(/obligatorios/i);
  });
});
