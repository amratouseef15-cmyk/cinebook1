import express from "express";
import cineRoutes from "./routes/cineRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/movies", cineRoutes);
app.use("/api/genres", genreRoutes);

export default app;