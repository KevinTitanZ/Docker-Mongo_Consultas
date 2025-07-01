const mongoose = require('mongoose');
const LaboratorioSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: String
});
module.exports = mongoose.model('Laboratorio', LaboratorioSchema);
