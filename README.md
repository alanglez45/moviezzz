# MovieZzz 🎬  
*Una aplicación para explorar y gestionar tus películas favoritas.*

## Descripción  
MovieZzz es una aplicación de películas que permite a los usuarios explorar títulos, ver detalles y gestionar su lista de favoritos. 

## Objetivo 
Desarrollar una aplicación web tipo SPA (Single Page Application) utilizando Angular, que permita a los usuarios descubrir películas, consultar información detallada y administrar una lista personalizada de títulos favoritos, simulando la experiencia de un servicio de streaming moderno.

## Captura de pantalla del proyecto ejecutándose 

![DB](./screenshots/db.png)  

## Instalación y Uso  
Sigue estos pasos para ejecutar la base de datos en tu máquina:

1. Instalar y abrir SQL Server Management Studio (SSMS).
2. Conectarse al servidor.
3. Crear la base de datos.
4. Cambiar al contexto de la base de datos.
5. Crear las tablas en el orden correcto.
6. Insertar los datos en el orden correcto.
7. Verificar los datos con consultas básicas.
8. Probar las relaciones con consultas JOIN.

## Dependencias / bibliotecas
SQL Server

## Desarrollo  
Primero, creé las tablas principales como usuarios, medios, géneros y favoritos, intentando conectarlas entre sí. Después, agregué algunos datos iniciales, como géneros y películas, para probar que las relaciones funcionaran. Aunque revisé la estructura para que sea funcional, todavía podrían surgir detalles que ajustar o mejorar en el futuro.

## Problemas conocidos
- Error en las credenciales:

## Retrospectiva
  
   1. ¿Qué hice bien?  
   - Establecí relaciones entre las tablas, como las claves foráneas y restricciones, que aseguran la integridad de los datos

   2. ¿Qué no salió bien?
   - En algunos casos, organizar las relaciones entre las tablas fue más complicado de lo esperado, especialmente al trabajar con claves foráneas

   3. ¿Qué puedo hacer diferente?
   - Utilizar una herramienta o diagrama para visualizar las relaciones y dependencias antes de implementar las tablas, lo cual haría más fácil el diseño inicial.


