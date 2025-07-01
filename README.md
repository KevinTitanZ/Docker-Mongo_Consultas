# Desarrollo de Consultas Avanzadas y Relaciones con MongoDB y Mongoose usando Docker

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_  

**Fecha de entrega:** _01/07/2025_

**Asignatura:** _Aplicaciones Distribuidas_

**Carrera:** Ingeniería en Tecnologías de la Información

---

##  Resumen

Este informe presenta el desarrollo de una práctica en la que se implementan consultas avanzadas y relaciones entre colecciones utilizando Mongoose sobre una base de datos MongoDB, todo en un entorno configurado con Docker. Se modelaron colecciones de usuarios, laboratorios y equipos, estableciendo relaciones entre ellas. Se realizaron consultas con operadores y agregaciones, validando el funcionamiento tanto desde Node.js como desde Mongo Express.

**Palabras Claves:** Docker, Node.js y MongoDB.


##  Introducción

En el desarrollo de aplicaciones modernas, el manejo eficiente de datos y sus relaciones es fundamental. MongoDB es una base de datos NoSQL que permite modelar estructuras flexibles, y Mongoose ofrece una capa adicional de control al interactuar con esta base de datos desde Node.js. Esta práctica tiene como objetivo aplicar estos conceptos y herramientas, integrando además un entorno contenerizado con Docker para facilitar la portabilidad y replicabilidad del proyecto.

##  Objetivos
- Configurar un entorno de desarrollo con Docker y Mongo Express.

- Modelar datos con Mongoose, definiendo relaciones entre colecciones.

- Ejecutar consultas básicas y avanzadas con operadores y agregaciones.


##  Marco Teórico (Tecnologías utilizadas.)

MongoDB es una base de datos orientada a documentos, ampliamente utilizada por su flexibilidad, escalabilidad y facilidad de integración con tecnologías modernas. En MongoDB, los datos se almacenan como documentos BSON (JSON binario), lo cual permite estructuras anidadas y relaciones referenciadas o embebidas.

Mongoose es una biblioteca para Node.js que proporciona una interfaz de programación para trabajar con MongoDB. Permite definir esquemas, validar datos y establecer relaciones usando referencias (ObjectId) entre documentos.

Docker permite contenerizar aplicaciones, facilitando la gestión de entornos reproducibles, y docker-compose simplifica el despliegue de múltiples servicios como MongoDB y Mongo Express.

## Descripción del Procedimiento

#### 1. Configuración del Entorno

Se creó un archivo docker-compose.yml que levanta dos servicios:

- mongo: instancia de MongoDB.

_MongoDB_

![grafico19](https://i.imgur.com/O4ZSny0.png)

- mongo-express: interfaz gráfica para interactuar con la base de datos desde el navegador (http://localhost:8081), protegida por credenciales básicas.

_mongo-express_

![grafico19](https://i.imgur.com/XibHUyj.png)

 El comando docker-compose up -d permitió ejecutar ambos servicios en segundo plano.

_Docker ejecutando los servicios_

![grafico19](https://i.imgur.com/YKsNbDJ.png)
 
#### 2. Estructura del Proyecto


_Estructura_

![grafico19](https://i.imgur.com/S3u2fAv.png)

#### 3. Modelado de las Colecciones con Mongoose

Se implementaron tres modelos Mongoose en la carpeta src/models/:

_Estructura del directorio src/models/ con los esquemas_


![grafico19](https://i.imgur.com/h8wgAls.png)

La colección Equipo fue diseñada con una relación de referencia hacia la colección Laboratorio usando ObjectId.

_Modelo Equipo con referencia a Laboratorio_

![grafico19](https://i.imgur.com/l8AygLS.png)


#### 4.  Inserción de Datos Iniciales
Se creó el archivo insertData.js para insertar registros de prueba en las colecciones. Este archivo elimina los datos existentes y luego crea usuarios, laboratorios y equipos relacionados.

_Script de inserción de datos en insertData.js_

![grafico19](https://i.imgur.com/mRiyyXf.png)

_Salida en consola al ejecutar el script_

![grafico19](https://i.imgur.com/m2S6fcT.png)

#### 5.  Ejecución de Consultas Básicas y Avanzadas

- Se desarrolló el archivo queries.js para realizar las siguientes consultas:

- Listado de usuarios.

- Equipos disponibles con su laboratorio relacionado (.populate()).

- Conteo de equipos por estado (.countDocuments()).

- Búsqueda por correo con $regex.

- Agregación con $lookup para promediar equipos por laboratorio.



_Resultado en consola de todas las consultas ejecutadas_

![grafico19](https://i.imgur.com/m2S6fcT.png)


#### 6. Visualización desde Mongo Express

Se accedió a http://localhost:8081 con las credenciales configuradas (admin/admin). Desde esta interfaz se visualizaron las colecciones creadas, sus documentos y relaciones, permitiendo validar que los datos insertados son correctos.

_Vista general de las colecciones en Mongo Express_

![grafico19](https://i.imgur.com/X5wk4LZ.png)

_Visualización de documentos con referencias (laboratorio en equipo)_

![grafico19](https://i.imgur.com/x8J8Um9.png)


#### 7. Consultas

_Listar todos los usuarios_

![grafico19](https://i.imgur.com/6QhiFty.png)


_Equipos disponibles con su laboratorio_

![grafico19](https://i.imgur.com/C4tGZ1e.png)

_Usuarios con correo @universidad.edu_

![grafico19](https://i.imgur.com/2sqOgI5.png)

_Promedio de equipos por laboratorio_   

![grafico19](https://i.imgur.com/vRsgXBL.png)

_Usar aggregate para promedio de equipos por laboratorio. Uso de$lookup,$group,$avg_

![grafico19](https://i.imgur.com/aYkWbLu.png)
![grafico19](https://i.imgur.com/SEqWuQ6.png)



## Conclusiones
**1.** Al trabajar con Docker, comprendí la importancia de contar con un entorno de desarrollo portátil, controlado y replicable.

**2.** El uso de Mongoose para modelar las colecciones en MongoDB brindó una forma estructurada de definir los datos y relaciones, permitiendo mantener la integridad entre documentos como Usuario, Laboratorio y Equipo.

**3.** Implementar consultas avanzadas, como búsquedas con $regex y operaciones de agregación con $lookup y $group, me permitió descubrir el verdadero potencial de MongoDB como sistema flexible y potente para el análisis y consulta de datos complejos.


