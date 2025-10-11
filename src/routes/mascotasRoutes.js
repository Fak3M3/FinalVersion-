import { Router } from "express";
import { listarMascotas, crearMascota, actualizarMascota, eliminarMascota } from "../controllers/mascotaController.js";

// Crear una instancia del router
const router = Router();


/*Rutas para la gestión de mascotas */

// Listar todas las mascotas
router.get("/", listarMascotas);

// Crear una nueva mascota
router.post("/", crearMascota);

// Actualizar una mascota existente
router.put("/:id", actualizarMascota);

// Eliminar una mascota
router.delete("/:id", eliminarMascota);

export default router;
