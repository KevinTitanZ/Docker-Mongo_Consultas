# Desarrollo e Implementación de Funcionalidades Mejoradas en una API RESTful con Angular y Node.js

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_  

**Fecha de entrega:** _30/06/2025_

**Asignatura:** _Aplicaciones Distribuidas_

**Carrera:** Ingeniería en Tecnologías de la Información

---

##  Resumen

Se desarrolló una aplicación web completa que integra una API RESTful construida en Node.js con Express y MongoDB, y un frontend realizado en Angular con componentes standalone. Se implementaron funcionalidades completas de autenticación mediante JWT, almacenamiento seguro de contraseñas con bcrypt, y un CRUD completo de usuarios accesible desde el frontend. 

Además, se integró manejo de sesiones, redirección de vistas, validación de formularios, mensajes de error/satisfacción, y mejoras visuales mediante estilos responsivos. El sistema se construyó bajo principios de modularidad, seguridad y escalabilidad, cumpliendo con estándares actuales de desarrollo web.

**Palabras Claves:** Angular, Node.js y MongoDB.


##  Introducción

El desarrollo de aplicaciones modernas requiere de una integración efectiva entre el frontend y el backend, así como de medidas de seguridad robustas y experiencias de usuario amigables. Este proyecto tiene como objetivo construir un sistema completo de gestión de usuarios, desde la creación hasta la autenticación, empleando tecnologías actuales como Angular, Node.js, MongoDB y Mongoose.

Además de implementar las operaciones básicas del CRUD, se enfocó en mejorar la seguridad con la inclusión de JWT y bcrypt, así como en optimizar la experiencia del usuario a través de formularios modernos, redirección automática, validaciones y visualizaciones dinámicas. Estas mejoras permiten construir una aplicación sólida, segura y mantenible.

##  Objetivos
- Implementar autenticación de usuarios con tokens JWT.

- Asegurar el almacenamiento de contraseñas utilizando hashing con bcrypt.

- Desarrollar formularios de registro y login conectados al backend.


##  Marco Teórico

###  - API RESTful
Una API RESTful permite la comunicación entre sistemas mediante el protocolo HTTP. Las operaciones básicas (GET, POST, PUT, DELETE) permiten acceder y modificar recursos, y son ideales para construir aplicaciones web interactivas y escalables.

###  - JWT (JSON Web Token)
JWT es un método estándar de autenticación basado en tokens. Permite que los usuarios inicien sesión y accedan a recursos protegidos sin necesidad de enviar credenciales en cada solicitud, mejorando tanto la seguridad como el rendimiento.

###  - Bcrypt
Bcrypt es un algoritmo de hash que se utiliza para almacenar contraseñas de manera segura. Su uso impide que las contraseñas sean leídas directamente en la base de datos, incluso si esta es comprometida.

###  - Angular y Componentes Standalone
Angular es un framework para el desarrollo de interfaces web. Los componentes standalone permiten crear vistas reutilizables y autónomas, facilitando la organización del código y la carga dinámica de vistas.

###  - CRUD
El acrónimo CRUD representa las operaciones básicas de manipulación de datos: Crear, Leer, Actualizar y Eliminar. Estas operaciones son fundamentales en sistemas que requieren interacción con usuarios o registros.

## Descripción del Procedimiento

#### 1. Autenticación y Seguridad
Se implementó autenticación con JWT desde el backend para generar tokens seguros al momento del login.

Las contraseñas son almacenadas de forma encriptada utilizando el algoritmo bcrypt.

_Algoritmo bcrypt_

![grafico19](https://i.imgur.com/PfxE9yL.png)
![grafico19](https://i.imgur.com/H9h4Gp0.png)

Se desarrolló un middleware que valida los tokens JWT en rutas protegidas, permitiendo restringir el acceso a funcionalidades sensibles.

_Tokens JWT_

![grafico19](https://i.imgur.com/7joqGgt.png)

![grafico19](https://i.imgur.com/mmdwL0k.png)


#### 2. CRUD Completo desde el Frontend
Se construyó un formulario de registro de usuarios que permite enviar los datos al backend, donde se validan y almacenan.

Se desarrolló un formulario de login, que al autenticarse correctamente guarda el token en el localStorage y redirige al panel principal.

Se agregó una tabla que lista todos los usuarios, con opciones para editar o eliminar desde la misma vista.

Se integraron todas las operaciones CRUD en un solo módulo de gestión, optimizando la navegación y la usabilidad.

_Operaciones CRUD_

![grafico19](https://i.imgur.com/uyHpzU2.png)

#### 3. Manejo de Sesión y Redirección
Tras el inicio de sesión exitoso, el usuario es automáticamente redirigido al panel CRUD.

Se incluyó la opción de navegar entre login y registro sin perder el estado de la aplicación.



_Login_

![grafico19](https://i.imgur.com/LBVFpn2.png)

_Registro_

![grafico19](https://i.imgur.com/MCPhf4m.png)
![grafico19](https://i.imgur.com/ScJVMc4.png)



#### 4.  Manejo de Errores y Mensajes
Se integró el despliegue de mensajes claros de éxito o error al realizar cualquier operación.
![grafico19](https://i.imgur.com/f30HVpS.png)

Se añadieron validaciones obligatorias en campos como nombre, email y contraseña en ambas capas (frontend y backend).

![grafico19](https://i.imgur.com/jLFFiw5.png)


## Análisis de Resultados
La implementación del sistema de autenticación y del CRUD completo desde el frontend permitió evaluar el comportamiento de la aplicación tanto en términos de funcionalidad como de experiencia de usuario. Tras finalizar las configuraciones del backend con Express, Mongoose, JWT y bcrypt, y del frontend en Angular con componentes standalone, se observó un flujo de interacción robusto y coherente entre ambas capas.

La integración del formulario de registro y login permitió validar el correcto funcionamiento del cifrado de contraseñas y la generación de tokens de autenticación. Una vez autenticado, el usuario es redirigido automáticamente al panel principal, desde donde se accede a todas las funcionalidades del CRUD. Esta interacción demostró una comunicación eficaz entre frontend y backend mediante solicitudes HTTP protegidas por JWT.

Las pruebas con usuarios reales confirmaron que los datos se almacenan de manera segura en la base de datos MongoDB. Se verificó también que los tokens almacenados en localStorage se enviaban correctamente en las solicitudes protegidas, permitiendo acceder únicamente a los usuarios autenticados.

El uso de formularios con validaciones integradas y el despliegue de mensajes personalizados mejoró significativamente la usabilidad del sistema. Los errores comunes, como campos vacíos o autenticaciones inválidas, fueron gestionados correctamente con retroalimentación visual inmediata.


## Discusión
Durante el desarrollo del sistema web con Angular y Node.js, se abordaron múltiples aspectos clave del desarrollo backend y frontend moderno. Uno de los retos más importantes fue la implementación de autenticación segura mediante JWT y el cifrado de contraseñas con bcrypt, lo cual permitió garantizar la integridad y confidencialidad de los datos de los usuarios. Esta mejora fue especialmente relevante al considerar buenas prácticas de seguridad web.

La integración de Angular con componentes standalone favoreció una estructura de frontend modular y organizada, simplificando tanto la navegación como la reutilización de componentes. Asimismo, la implementación de formularios de registro, inicio de sesión, y gestión de usuarios en una única vista permitió mejorar la experiencia de usuario y reducir los tiempos de interacción.

## Conclusiones
**1.** Se logró implementar un sistema completo de gestión de usuarios que incluye autenticación, seguridad y CRUD funcional desde el frontend, cumpliendo con los objetivos establecidos.

**2.** La integración de JWT y bcrypt fortaleció significativamente la seguridad del sistema, protegiendo la información sensible de los usuarios y controlando el acceso a las funcionalidades protegidas.

**3.** Las pruebas realizadas demostraron la correcta comunicación entre frontend y backend, con una gestión adecuada de sesiones, validación de campos y retroalimentación clara para el usuario.

## Recomendaciones

**1.** Aplicar control de errores más detallado en cada endpoint para mejorar la retroalimentación al cliente en caso de fallos o datos inválidos.

**2.** Se recomienda integrar un sistema de roles de usuario (por ejemplo, administrador, usuario normal) para diferenciar permisos de accesos.

