##Bienvenido al backend de DSFAIDER

El Backend de DSFAIDER está construido bajo el framework ExpressJS y el ORM TypeORM

Consulta documentación aquí

- [ExpressJS](https://expressjs.com/es/)
- [TypeORM](https://typeorm.io/)

El proyecto por el momento es pequeño y con una arquitectura simple basada en capas.
Un poco parecido a lo que podría ser una arquitectura MVC para no complicar las cosas.
Pero para mantener el orden y tener una experiencia de desarrollo ordenada apliqué algunos conceptos que te explicaré mas adelante.

###Estructura del proyecto.

En la raíz del proyecto te encontrarás con los siguientes archivos y directorios.

- config:
    En este directorio estan las configuraciones relacionadas a infraestructuras necesarias para el proyecto
    por el momento te encontraras el archivo de configuración de la base de datos.
- node_modules:
    Los módulos de node, nada más que agregar.
- src:
    En este directorio está todo el código fuente de la aplicación.
    Dentro podras ver que hay una carpeta para cada módulo del sistema.
    - raffles
    - tickets
    - users
    ...
    Solo ve directo al módulo donde tengas que realizar una modificación
- tests:
    Para un futuro testear la aplicación, de momento, estará vacía.
- .env:
    En ese archivo estan las variables de entorno para el desarrollo y puesta en producción.
- app.ts:
    Es el archivo inicial de todo el proyecto, este es el punto inicial de la aplicación.
- package.json:
    Aquí se administran los scripts y dependencias del proyecto.
- package-lock.json:
    No tocar manualmente.
- tsconfig.json:
    Configuraciones de Typescript (no mover a menos que sea realmente necesario.)

###Módulos

Dentro de cada módulo podras encontrar
- uno o más controladores
- una carpeta de casos de usos
- una carpeta de repositorios
- una carpeta de entidades
- una carpeta de dtos

Puede que encuentres más archivos dentro de los módulos pero principalmente estos archivos y directorios son el pan de cada día

####Casos de uso (Use cases)

En estos archivos está contenida la lógica de cada acción del sistema.
Se puede decir que por cada acción realizable por el usuario hay un archivo que contiene la lógica necesaria para dicha acción

- Crear una rifa
- Actualizar una rifa
- Activar una rifa
...

En estos archivos se orquesta toda la lógica, y se hace uso de lo que se necesite para cumplir con la acción que representa el caso de uso.
Por ejemplo, si al crear una rifa se debe mandar un email, aquí debe estar plasmada toda esa lógica.
Son el corazón de la aplicación en terminos de acciones.

####Repositorios (Repositories).

En los repositorios está la lógica de acceso a datos.
Nuestros casos de uso contienen toda la lógica del negocio, por lo que ensuciar o hacer más grande esos archivos con algo tan ajeno con lógica de ¿como guardar un registro en la tabla usuarios de la base de datos de mysql?, es innecesario y solo crearía código más dificil de leer, archivos más grandes y una peor experiencia.
Así que toda la lógica de acceso a base de datos y persistencia está en los repositorios, para que el caso de uso pueda utilizarlos sin preocuparse de la lógica que hay detras.

####Dtos

Los dtos son simplemente archivos que contienen estructuras de datos que se usan para tipar objestos en nuestra aplicación. Por ejemplo, si un caso de uso necesita la información de una rifa para actualizarla, el caso de uso recibirá un objeto (dto) como parámetro, es decir. Un objeto que contiene todas las propiedades necesarias para realizar la actualización. Y es el DTO el que indica que datos y de que tipo se necesitan para realizar dicha acción.

Por eso se le conoce como DTO (Data Transfer Object)
Simplemente un objeto para transferir información entre componentes del sistema.

####Controladores.

En el controlador se llaman a los casos de usos y se devuelve una respuesta al cliente.