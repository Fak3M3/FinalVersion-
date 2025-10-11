import mongoose from "mongoose";

// Esquema de Mongoose para mascotas.
// Este esquema define la estructura de los documentos "Mascota" en la colección.
// Campos:
// - nombre: Nombre de la mascota (String).
// - especie: Especie (por ejemplo: perro, gato) (String).
// - edad: Edad en años (Number).
// - raza: Raza de la mascota (String).
// - tamaño: Tamaño (por ejemplo: pequeño, mediano, grande) (String).
// - descripcion: Descripción adicional (String).
// - fotos: Array de URLs o rutas de imágenes (Array de String).
// - estadoAdopcion: Estado del proceso de adopción. Valores permitidos:
//     "disponible" - la mascota está disponible para adopción (valor por defecto)
//     "en proceso" - se está gestionando una adopción
//     "adoptado" - la mascota ya fue adoptada
// Opciones del esquema: timestamps añade `createdAt` y `updatedAt` automáticamente.
const mascotaSchema = new mongoose.Schema({
  nombre: String,
  especie: String,
  edad: Number,
  raza: String,
  tamano: String,
  descripcion: String,
  fotos: [String],
  estadoAdopcion: { type: String, enum: ["disponible", "en proceso", "adoptado"], default: "disponible" }
}, { timestamps: true });

// Exporta el modelo 'Mascota' para usarlo en controladores y rutas.
// mongoose.model(modelName, schema) crea (o recupera) el modelo asociado.
export default mongoose.model("Mascota", mascotaSchema);
