require('dotenv').config();
const mongoose = require('mongoose');
const Usuario = require('./usuario');
const Laboratorio = require('./laboratorio');
const Equipo = require('./equipo');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Usuario.deleteMany();
    await Laboratorio.deleteMany();
    await Equipo.deleteMany();

    const usuarios = await Usuario.insertMany([
      { nombre: "Carlos Pérez", correo: "carlos@universidad.edu", rol: "docente" },
      { nombre: "Ana Torres", correo: "ana@universidad.edu", rol: "estudiante" }
    ]);

    const lab1 = await Laboratorio.create({ nombre: "Lab Redes", ubicacion: "Edificio A" });

    await Equipo.insertMany([
      { tipo: "Router", estado: "disponible", laboratorio: lab1._id },
      { tipo: "Switch", estado: "dañado", laboratorio: lab1._id }
    ]);

    console.log("Datos insertados");
    process.exit();
  })
  .catch(err => console.error(err));
