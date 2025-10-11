import { Router } from "express";
import { listarProductos, crearProducto, actualizarProducto, eliminarProducto } from "../controllers/productoController.js";

const router = Router();

// Rutas para la gestión de productos
router.get("/", listarProductos);

// Crear un nuevo producto
router.post("/", crearProducto);

// Actualizar un producto existente
router.put("/:id", actualizarProducto);

// Eliminar un producto
router.delete("/:id", eliminarProducto);

export default router;