import express from "express";
import cors from "cors";
import { connectDatabase } from "./src/database/db";
import userRoutes from "./src/routes/userRoutes";
import tmdbRoutes from "./src/routes/tmdbRoutes";
import { loginUser } from "./src/controllers/authController";
import { createUser } from "./src/controllers/userController";
import { authenticateToken } from "./src/middleware/authMiddleware";

const app = express();
const port = 8080;

connectDatabase();

app.use(cors());
app.use(express.json());
app.get("/api", (req, res) => {
  res.send("Bem-vindo à minha API!");
});
app.use("/api", userRoutes);
app.use("/api/tmdb", tmdbRoutes);
app.post("/api/login", loginUser);
app.post("/api/register", createUser);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export { connectDatabase }; // Exporta a função connectDatabase
