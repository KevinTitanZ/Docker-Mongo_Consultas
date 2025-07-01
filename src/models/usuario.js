const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  rol: String
});
module.exports = mongoose.model('Usuario', UsuarioSchema);
