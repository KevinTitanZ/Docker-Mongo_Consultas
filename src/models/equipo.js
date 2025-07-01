const mongoose = require('mongoose');
const EquipoSchema = new mongoose.Schema({
  tipo: String,
  estado: String,
  laboratorio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laboratorio'
  }
});
module.exports = mongoose.model('Equipo', EquipoSchema);
