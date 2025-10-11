import { Router } from "express";
import { registrarUsuario, loginUsuario } from "../controllers/authController.js";

// Crear una instancia del router
const router = Router();

// Rutas para la autenticación
router.post("/registro", registrarUsuario);
// Rutas para el login
router.post("/login", loginUsuario);

export default router;
