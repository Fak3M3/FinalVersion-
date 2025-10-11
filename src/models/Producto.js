import mongoose from "mongoose";

// Esquema de Mongoose para productos.
// Define la estructura de un producto en la colección "Producto".
// Campos:
// - nombre: Nombre del producto (String).
// - cantidad: Stock disponible (Number).
// - precio: Precio en la moneda que use la app (Number).
// - descripcion: Descripción detallada del producto (String).
// - categoria: Categoría o tipo del producto (String).
// - fotos: Array de URLs o rutas a imágenes del producto (Array de String).
// Opciones: timestamps añade `createdAt` y `updatedAt` automáticamente.
const productoSchema = new mongoose.Schema({
  nombre: String,
  cantidad: Number,
  precio: Number,
  descripcion: String,
  categoria: String,
  fotos: [String],
}, { timestamps: true });

// Exporta el modelo 'Producto' para usarlo en controladores y rutas.
export default mongoose.model("Producto", productoSchema);