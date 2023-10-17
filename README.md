# api-testing
# Newman Runner para pruebas API automatizadas

Este proyecto implementa un Newman runner personalizado usando Node.js con TypeScript para ejecutar colecciones de pruebas de Postman.

## Requisitos

- Node.js (v19.8.1)

## Instalación

Sigue estos pasos para instalar las dependencias y configurar el entorno:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/DUNA-E-Commmerce/api-testing.git

2. Navega hasta la carpeta del proyecto:

   ```bash
      cd api-testing

3. Instala las dependencias del proyecto:

   ```bash
      npm install

4. Configura las variables de entorno en un archivo .env en la raíz del proyecto, siguiendo el formato del archivo .env.template proporcionado 

## Uso

Para ejecutar las pruebas con el Newman Runner, sigue estos pasos:

1. Ejecuta el comando en la terminal:
  
   ```bash
      npm test

2. Tambien se puede pasar la variable de entorno FOLDERS para ejecutar una carpeta o varias dentro de la collection:

   ```bash
      npm test -- --FOLDERS=Nombre_carpeta
      npm test -- --FOLDERS=Nombre_carpeta1, Nombre_carpeta2

Esto iniciará la ejecución de las pruebas en las carpetas especificadas.

## Documentación adicional

1. Los valores de las variables de entorno se obtienen de la API de postman, en la collection que se quiere ejecutar:
   - En opciones, compartir o share, Via API, copiar la url.
   - La url contiene el id de la colección, y la postman access key.
   - POSTMAN_ENVIRONMENT es poblada desde el mismo repositorio, en este momento solo existe el env de Staging: Staging.postman_environment.json

2. Ninguna variable puede ir vacia, excepto FOLDERS, si se deja vacia ejecutará todos los request de la collection.

3. A la variable FOLDERS se le puede especificar 1 o varias carpetas, ejemplo: 
   - Solo 1 carpeta: FOLDERS = 'Mexico'
   - Con 2 o mas carpetas: FOLDERS = 'Mexico, Colombia, Happy Path'

4. Si existe mas de 1 carpeta nombrada, por ejemplo, Mexico; el runner los ejecutará todos, en el caso de querer ejecutar especificamente 1 carpeta y tener otras homónimas se debe identificar a la carpeta de manera única.

5. Se puede especificar las carpetas tambien a través del CLI con el flag -- --FOLDERS=Something,Other despúes de npm test, ver la sección USO.

6. Los reportes se generan dentro de las carpetas del repositorio, dentro de la carpeta 'newman', genera los reportes en html y xml.

