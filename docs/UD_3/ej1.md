# Actividades sobre rsc y subversion

## Actividad 1. Desarrollo colaborativo

Juan y Miguel son dos desarrolladores del mismo proyecto de software. Aunque cada uno trabaja unas funcionalidades concretas de una aplicación, deben trabajar con el mismo código fuente. ¿Qué mecanismos y procedimiento crees que sería más conveniente utilizar en su trabajo diario?

Describe en un archivo en formato markdown los mecanismos que utilizarías, justificando el tipo, así como el procedimiento detallado de las operaciones que deberían realizar cada vez que van a trabajar con el proyecto.

***Respuesta:***

-----

**Scrum**

Para abordar el desarrollo colaborativo de Juan y Miguel en el mismo proyecto de software, aplicaremos la metodología ágil Scrum, dado que proporciona un marco flexible y adaptable que les permitirá trabajar de manera eficiente con un código fuente compartido.

**Organización del equipo de trabajo**

En un equipo Scrum, aunque Juan y Miguel trabajan en distintas funcionalidades, deben colaborar estrechamente y autogestionarse. En este caso, ambos formarán parte del equipo de desarrollo, que es responsable de entregar las distintas partes del producto en cada sprint.

Dentro de este marco:

* Scrum Master: Será la persona que se asegure de que el marco de Scrum se aplique correctamente, eliminando cualquier obstáculo que pueda afectar a Juan y Miguel y organizando las reuniones necesarias.

* Product Owner: Representa al cliente y prioriza los requisitos del producto. Aunque Juan y Miguel no estarán en contacto directo con el cliente, recibirán del Product Owner las instrucciones claras de qué funcionalidades son más prioritarias.

**Reuniones clave según Scrum**

Para mantener la alineación entre Juan y Miguel y asegurar que el proyecto avance de manera organizada, deben participar en las siguientes reuniones:

* **Reunión de planificación del sprint (Sprint Planning):**

    Antes de comenzar cada sprint, se debe realizar una reunión de planificación en la que el Product Owner explique qué tareas deben priorizarse en función de las necesidades del cliente. Juan y Miguel seleccionarán las tareas más importantes del Product Backlog, formando el Sprint Backlog, que serán las tareas a realizar durante las próximas semanas. Esto ayuda a definir el alcance del trabajo y estimar el tiempo necesario para completar cada tarea.

* **Scrum diario (Daily Scrum):**

    Es crucial que cada día, Juan y Miguel participen en una reunión breve (de unos 15 minutos) en la que se comenten tres aspectos clave: qué hicieron el día anterior, qué planean hacer ese día, y si han encontrado algún problema. Esto permite mantener sincronizados a ambos desarrolladores y resolver cualquier obstáculo rápidamente.

* **Revisión del sprint (Sprint Review):**

    Al finalizar cada sprint, deben presentar el trabajo realizado en una reunión de revisión, mostrando al Product Owner y al resto del equipo el progreso realizado.  Aquí, se evaluará si las funcionalidades desarrolladas cumplen con los requisitos del cliente. Además, se podrán realizar demos del producto, lo que ayuda a verificar que todo funcione correctamente antes de pasar al siguiente sprint.

* **Retrospectiva del sprint (Sprint Retrospective):**

    Después de la revisión del sprint, Juan y Miguel deben reunirse para discutir cómo ha sido el trabajo en equipo durante el sprint. Aquí, analizarán qué aspectos han funcionado bien y cuáles se pueden mejorar. Esta reunión es clave para optimizar el flujo de trabajo y aplicar mejoras en el siguiente sprint.



## Actividad 2. Control de versiones y modelo iterativo

Un equipo de desarrolladores ha decidido abordar un proyecto siguiendo un modelo de desarrollo iterativo e incremental. En la planificación inicial, se ha decidido que se abordará en cinco fases, y cada una tendrá como resultado una versión del producto con la funcionalidad correspondiente a cada iteración.

Para el desarrollo y trabajo en equipo utilizarán el SCV Subversion.

¿Qué estructura u organización crees que sería más interesante para el equipo en el repositorio?

Revisa los ejemplos realizados sobre Subversion, y las carpetas que este SCV sugiere que se utilicen, y redacta tu propuesta de estructura/organización en un documento en formato Markdown.

***Respuesta:***

-----

En primer lugar, utilizaremos el servicio de SourceForge, una plataforma ampliamente utilizada para alojar y gestionar proyectos de software de código abierto, que nos permitirá crear un repositorio SVN donde centralizaremos el código del proyecto y facilitaremos la colaboración entre los desarrolladores.

A continuación, propondremos la siguiente estructura y organización del proyecto.

**Estructura del repositorio SVN**

1. **Raiz del repositorio**

    La raíz del repositorio puede llamarse por ejemplo ***proyecto-versión***. Esta será la carpeta principal donde se organizará todo el contenido del proyecto.

2. **Subdirectorios principales**

    Dentro de la raíz, se pueden crear los siguientes subdirectorios:

        proyecto-versión/
        |-- trunk/
        |-- branches/
        |-- tags/


    * **trunk:** Este directorio contendrá la versión principal y más estable del código.

    * **branches:** En este directorio se crearán ramas para el desarrollo de características específicas o para abordar tareas o bugs.

    * **tags:** Este directorio se utilizará para almacenar versiones estables del producto en momentos específicos.

3. **Organización de las Fases del Proyecto**

    Dado que el proyecto se desarrollará en cinco fases, se puede implementar una organización adicional dentro del directorio trunk o branches para reflejar estas fases:
    
    * Estructura en trunk/:    
        
            proyecto-versión/
            |-- trunk/
            |-- |-- fase-1/
            |-- |-- fase-2/
            |-- |-- fase-3/
            |-- |-- fase-4/
            |-- |-- fase-5/
            |-- ...

    * Estructura en branches/:

        En lugar de añadir todas las fases directamente en trunk, se podrían gestionar como ramas para desarrollar las funcionalidades específicas en cada fase.

            proyecto-versión/
            |-- branches/
            |-- |-- fase-1/
            |-- |-- fase-2/
            |-- |-- fase-3/
            |-- |-- fase-4/
            |-- |-- fase-5/
            |-- ...



## Actividad 3. rcs y svn

A modo de síntesis de ambos tipos de SCV vistos, crea un documento en formato Markdown indicando las diferencias entre ellos.

Hecho esto, céntrate en rcsy subversioncomenta brevemente y con tus palabras qué hacen las siguientes órdenes:

* Para a rcs:
    * co
    * ci
* Para a svn:
    * svn co
    * svn ci
    * svn st
    * svn add
    * svn up

Si te fijas, ambos sistemas tienen las órdenes coo ci. ¿Hacen exactamente lo mismo en un sistema que en otro? ¿Qué diferencias tienen?

***Respuesta:***

-----

RCS (Revision Control System) y SVN (Subversion) son ambos sistemas de control de versiones  pero tienen diferentes enfoques de uso y características.
RCS es adecuado para el control de versiones a nivel de archivo en proyectos más pequeños, mientras que SVN es una opción más robusta y escalable diseñada para la colaboración en proyectos grandes, con características avanzadas que facilitan el trabajo en equipo.


* **Para a rcs:**
    * **co (o checkout):**
    
        Esta orden se utiliza para extraer un archivo versionado del repositorio de RCS. Al usarlo, el sistema crea una copia local del archivo en su versión más reciente. Esto permite al desarrollador trabajar en el archivo sin afectar directamente la versión en el repositorio hasta que decida guardar sus cambios.
    
    * **ci (check-in):**

        La orden ci se usa para guardar los cambios realizados en un archivo de vuelta en el repositorio de RCS. Cuando se ejecuta, el sistema toma la copia local del archivo, la compara con la versión almacenada y, si hay diferencias, la actualiza en el repositorio.

* **Para a svn:**
    * **svn co (checkout):**

        Se utiliza para extraer una copia del repositorio. Al ejecutarla, se descarga todo el contenido del directorio especificado a una carpeta local en la máquina del usuario. Esto permite comenzar a trabajar en el proyecto con la última versión de los archivos disponibles.

    * **svn ci (check-in):**

        Se usa para enviar los cambios realizados en los archivos locales de nuevo al repositorio. Con esta orden, se actualiza el repositorio con las modificaciones y se debe incluir un mensaje descriptivo que explique qué cambios se han realizado.

    * **svn st (status):**

        Esta orden se utiliza para mostrar el estado actual de los archivos en el directorio de trabajo en relación con el repositorio. Indica qué archivos han sido modificados, añadidos o eliminados, y si hay cambios que no han sido enviados al repositorio.

    * **svn add (add):**

        Se usa para incluir nuevos archivos o directorios en el control de versiones de SVN. Después de añadir un archivo con esta orden, el archivo estará en el próximo commit y se   rastreará por SVN. Es un paso crucial para asegurarse de que los nuevos archivos se integren en el proyecto.

    * **svn up (update):**

        Se utiliza para actualizar el directorio de trabajo local con los cambios más recientes del repositorio. Esto permite al desarrollador sincronizar su copia local con la versión más reciente en el servidor, incorporando cualquier cambio realizado por otros miembros del equipo desde la última vez que se actualizó.

