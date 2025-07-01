require('dotenv').config();
const mongoose = require('mongoose');
const Usuario = require('./usuario');
const Laboratorio = require('./laboratorio');
const Equipo = require('./equipo');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    // 1. Listar todos los usuarios
    console.log("Usuarios:");
    console.log(await Usuario.find());

    // 2. Buscar laboratorios con equipos disponibles
    const equiposDisp = await Equipo.find({ estado: "disponible" }).populate('laboratorio');
    console.log("Equipos disponibles con su laboratorio:", equiposDisp);

    // 3. Contar equipos por estado
    const count = await Equipo.countDocuments({ estado: "disponible" });
    console.log("Equipos disponibles:", count);

    // 4. Buscar usuarios cuyo correo termina en @universidad.edu
    const regexUsers = await Usuario.find({ correo: /@universidad\.edu$/ });
    console.log("Usuarios con correo @universidad.edu:", regexUsers);

    // 5. Aggregate: promedio de equipos por laboratorio
    const promedio = await Equipo.aggregate([
      { $group: { _id: "$laboratorio", totalEquipos: { $sum: 1 } } },
      { $lookup: {
        from: "laboratorios",
        localField: "_id",
        foreignField: "_id",
        as: "laboratorio"
      }},
      { $unwind: "$laboratorio" },
      { $project: {
        laboratorio: "$laboratorio.nombre",
        totalEquipos: 1
      }}
    ]);
    console.log("Promedio de equipos por laboratorio:", promedio);

    process.exit();
  })
  .catch(err => console.error(err));
