# Ejercicio 3
## Exemples de traducció. Les ordres python3, cc, java i javac.

**Ejemplo de traducción en python3:**

**Respuesta:**

----

*Código fuente:*

Escribimos el mensaje *Hola mundo* por la pantalla y lo guardaremos con la extención `.py` por ejemplo `hola.py`:

    print ("Hola mundo")

*Interpretación:*

Python es un lenguje interpretado, por lo tanto, la orden `python3` interpreta el codigo directamente.

Para lanzar el interprete de *Python*, escibiremos:

    $ python3 hola.py

*Ejecución:*

El código se ejecuta directamente despues de ser interpretado

**Ejemplo de traducción en cc:**

*Código fuente:*

Escribimos el mensaje *Hola mundo* por la pantalla y lo guardaremos con extención `.c` como ejemplo `hola.c`:

    #include <stdio.h>
    int main() {
       printf("Hola mundo\n");
       return 0;
    }

*Compilar:*

Ejecutaremos desde la misma carpeta donde se encuntra el fichero.

    cc hola.c

Posteriormente se crea un fichero llamado `a.out`. Es el ejecutable que contiene el código máquina traducido por el compilador, más tarde para ser ejecutado.

*Ejecutable:*

Para poder ejecutar utilizariamos el siguiente orden
    
    ./a.out

Cuando se ejecuta se mostrará el mismo mensaje:

    Hola mundo

**Ejemplo de traducción en java (Utilizando javac y java):**

*Código fuente:*

Crearemos un fichero con la extención `.java` como por ejemplo `Hola.java` y añadiremos el código para que pueda mostrar por pantalla *Hola mundo*.
    
>*Este fichero no se puede ejecutar directamente*

    public class Hola {
        public static void main(String[] args) {
            System.out.println("Hola mundo");
        }
    }

*Compilar:*

Guardaremos y nos situariamos en la misma carpeta donde tenemos guardado el archivo y la lanzaremos con el siguiente orden `javac`:

    javac Hola.java

`javac`, es el compilador de Java la cual lee el codigo fuente de `Hola.java`. El compilador genera un nuevo fichero llamda Hola.class la cual no se puede ejecutar directamente si no que lo hace la máquina virtual de Java (JVM).

Ejecución:

La orden `java` ejecuta el fichero `Hola.class` a traves de la JVM y muestra el resultado por pantalla.

    java Hola

*Resultado:*

    Hola mundo