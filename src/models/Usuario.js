import mongoose from "mongoose";

// Esquema de Mongoose para usuarios.
// Campos:
// - nombre: Nombre completo del usuario (String).
// - email: Correo electrónico (String). Tiene índice unique para evitar duplicados.
// - contraseña: Hash de la contraseña (String).
// - rol: Rol del usuario en la aplicación. Valores permitidos:
//     "admin" - usuario con permisos administrativos
//     "adoptante" - usuario normal que puede adoptar
// Opciones: timestamps añade `createdAt` y `updatedAt` automáticamente.
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  // Nota: se usa 'contrasena' (sin 'ñ') como nombre de campo para evitar
  // problemas con identificadores y compatibilidad. Aquí se espera almacenar
  // el hash de la contraseña, nunca la contraseña en texto plano.
  contrasena: String,
  rol: { type: String, enum: ["admin", "adoptante"], default: "adoptante" }
}, { timestamps: true });

// Exporta el modelo 'Usuario' para usarlo en autenticación y controladores.
export default mongoose.model("Usuario", usuarioSchema);
