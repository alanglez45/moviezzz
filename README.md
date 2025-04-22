# MovieZzz 🎬  
*Una aplicación para explorar y gestionar tus películas favoritas.*

## Descripción  
MovieZzz es una aplicación de películas que permite a los usuarios explorar títulos, ver detalles y gestionar su lista de favoritos. 

## Objetivo 
Desarrollar una aplicación web tipo SPA (Single Page Application) utilizando Angular, que permita a los usuarios descubrir películas, consultar información detallada y administrar una lista personalizada de títulos favoritos, simulando la experiencia de un servicio de streaming moderno.

## Captura de pantalla del proyecto ejecutándose 

![App](./src/assets/screenshots/moviezz-app.png)  

## Instalación y Uso  
Sigue estos pasos para ejecutar MovieZzz en tu máquina:

1. Clona el repositorio:  
   ```sh
   git clone https://github.com/alanglez45/moviezzz.git

   cd moviezzz

   npm install

   ng serve
## Dependencias / bibliotecas
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.18.

## Desarrollo  
Para adaptar la aplicación a Angular, fue necesario separar la lógica de la interfaz de usuario en componentes independientes, cada uno con responsabilidades claras. Esto permitió:

- Reutilizar secciones comunes de la interfaz (como tarjetas de películas, navegación, etc.).

- Manejar el estado de la aplicación de forma más eficiente.

## Problemas conocidos
- 🛠 Falta implementar la función de favoritos, series, películas etc.


## Retrospectiva
  
   1. ¿Qué hice bien?  
   - Logré estructurar correctamente la aplicación utilizando Angular 18, siguiendo buenas prácticas para asegurar una presentación clara, modular y bien organizada. El uso de componentes me permitió mantener una arquitectura limpia y escalable.

   2. ¿Qué no salió bien?
   - Algunos aspectos de la migración fueron más complicados de lo esperado. Al no estar completamente familiarizado con Angular, me encontré con desafíos al adaptar ciertas partes de la lógica que antes tenía implementadas de forma más libre o directa. Angular requiere seguir una estructura muy definida (módulos, decoradores, binding, etc.), lo cual fue un cambio importante que me llevó tiempo comprender y aplicar correctamente.

   3. ¿Qué puedo hacer diferente?
   - Dedicar más tiempo a entender a fondo el ecosistema de Angular, incluyendo el ciclo de vida de los componentes, la inyección de dependencias y la comunicación entre componentes. También quiero reforzar mis conocimientos sobre TypeScript, ya que Angular se apoya fuertemente en este lenguaje. Mantener una rutina de estudio constante y trabajar en proyectos más complejos me ayudará a afianzar estos conceptos.



