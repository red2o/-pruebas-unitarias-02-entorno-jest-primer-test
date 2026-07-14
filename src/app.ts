import express from "express";
import tareasRoutes from "./routes/tareas.routes";

const app = express();

app.use(express.json());
app.use(tareasRoutes);

export default app;
