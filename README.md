# Prueba Frotend Inditex

Esta prueba consiste en la creación de una mini-aplicación para escuchar podcasts musicales.

## Para ejecutar el proyecto:

### Modo desarrollo

Ejecuta `yarn dev` para correr la aplicación en el modo de desarrollo. En el que se sirvan los assets sin minimizar (pueden estar concatenados si se quiere).
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### Modo Produccion

Ejecuta `yarn build` para construir la aplicación para producción en la carpeta `dist`. Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

Despues Ejecuta `yarn preview` para correr la aplicación en el modo de produccion. En el que se sirvan los assets concatenados y minimizados.
Abra [http://localhost:3001](http://localhost:3001) para verlo en el navegador.


## Para ejecutar las pruebas (tests):

### Modo Consola

Ejecuta `yarn test` para correr los tests del proyecto a traves de la consola.

### Modo UI
Ejecuta `yarn test:ui` para correr los tests del proyecto a traves de una interfaz de usuario para ver e interactuar con sus pruebas.
Abra [http://localhost:3002/__vitest_\_/](http://localhost:3002/__vitest__/) para verlo en el navegador.
