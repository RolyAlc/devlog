# **Ejercicio: Gestión y Visualización de Pizzas con JavaScript y Web Components**

En este ejercicio, desarrollarás una aplicación web que permita obtener y visualizar una lista de pizzas desde una API REST. Para ello, deberás crear una **clase `Pizza`** que represente el modelo de datos, con propiedades como `id`, `nom`, `desc`, `vegetariana`, `alergens`, `img` y `preu`. Esta clase servirá para instanciar objetos `Pizza` con la información obtenida de la API. Además, se permitirá **de manera opcional pasar un JSON estático con la información de las pizzas**, en caso de que no se desee obtener los datos desde la API.

A continuación, implementarás una **función `obtenerPizzas()`** que devuelva una **lista de objetos `Pizza`** (equivalente a `List<Pizza>` en otros lenguajes como Java), obtenida mediante una solicitud `fetch` a la API, o cargada desde un JSON local en caso de usar la opción estática. Esta función devolverá una promesa que, al resolverse, proporcionará el listado de pizzas.

El siguiente paso será construir un **Web Component `<pizza-card>`** que reciba un objeto `Pizza` y lo muestre en forma de tarjeta, con su imagen, nombre, descripción, precio e indicación de si es vegetariana. Finalmente, **deberás juntar todo el trabajo realizado**, de modo que al cargar la página, se obtengan las pizzas (de la API o del JSON) y se generen dinámicamente las tarjetas `<pizza-card>` en el navegador. Este ejercicio te permitirá practicar conceptos como **Programación Orientada a Objetos (POO) en JavaScript**, **uso de `fetch` y promesas**, **manipulación del DOM**, y **creación de componentes personalizados con Shadow DOM y Web Components**.

1. Clase pizza y (despues el fech)
opcional: podemos pasar un json de la inf de la pizza, api
2. List `<Pizza>` funcion Obtenerizzas
3. webcomponent `<pizza>`
4. Juntar-ho tot

---

## Ficheros

``` html title="index.html"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizzería WebComponent</title>
</head>
<body>
    <h1>🍕 Nuestras Pizzas 🍕</h1>

    <div id="pizzes-container">
        <!-- Aquí se insertarán los <pizza-card> dinámicamente -->
    </div>

    <script type="module" src="./main.js"></script> // Importante añadir el atributo type="module" para poder usar import/export
</body>
</html>
```

---

``` js title="pizza.js"
export class Pizza {
    constructor(pizzaData) {
        this.id = pizzaData.id;
        this.nom = pizzaData.nom;
        this.desc = pizzaData.desc;
        this.vegetariana = pizzaData.vegetariana;
        this.alergens = pizzaData.alergens;
        this.img = pizzaData.img;
        this.preu = pizzaData.preu;
    }
}
```

---

### **¿Qué es esta clase `Pizza`?**

Esta clase es como una "plantilla" o un "molde" para crear objetos que representen pizzas. Cada vez que creas una nueva pizza usando esta clase, estás creando un objeto que tiene todas las características (propiedades) de una pizza, como su nombre, descripción, si es vegetariana, etc.

---

### **Parte por parte:**

#### 1. **`export class Pizza { ... }`**

- Aquí estamos definiendo una clase llamada `Pizza`.
- La palabra `export` significa que esta clase se puede usar en otros archivos de JavaScript. Es como decir: "Hey, esta clase está disponible para que otros la usen".

---

#### 2. **`constructor(pizzaData) { ... }`**

- El `constructor` es un método especial que se ejecuta automáticamente cuando creas una nueva instancia de la clase (es decir, cuando creas una nueva pizza).
- El `constructor` recibe un parámetro llamado `pizzaData`. Este parámetro es un objeto que contiene toda la información de la pizza (como su nombre, descripción, precio, etc.).

---

#### 3. **`this.id = pizzaData.id;`**

- `this` se refiere a la instancia actual de la clase (es decir, la pizza que estamos creando).
- `this.id` es una propiedad de la pizza que estamos creando. Aquí le estamos asignando el valor de `pizzaData.id`.
- En otras palabras, estamos diciendo: "El ID de esta pizza será el mismo que el ID que viene en `pizzaData`".

---

#### 4. **`this.nom = pizzaData.nom;`**

- Aquí estamos asignando el nombre de la pizza (`nom`) usando el valor que viene en `pizzaData.nom`.
- Es como decir: "El nombre de esta pizza será el mismo que el nombre que viene en `pizzaData`".

---

#### 5. **`this.desc = pizzaData.desc;`**

- Aquí asignamos la descripción de la pizza (`desc`) usando el valor que viene en `pizzaData.desc`.
- Es como decir: "La descripción de esta pizza será la misma que la descripción que viene en `pizzaData`".

---

#### 6. **`this.vegetariana = pizzaData.vegetariana;`**

- Aquí asignamos si la pizza es vegetariana o no (`vegetariana`) usando el valor que viene en `pizzaData.vegetariana`.
- Es como decir: "Esta pizza será vegetariana o no, dependiendo de lo que venga en `pizzaData`".

---

#### 7. **`this.alergens = pizzaData.alergens;`**

- Aquí asignamos los alérgenos de la pizza (`alergens`) usando el valor que viene en `pizzaData.alergens`.
- Es como decir: "Los alérgenos de esta pizza serán los mismos que los que vienen en `pizzaData`".

---

#### 8. **`this.img = pizzaData.img;`**

- Aquí asignamos la imagen de la pizza (`img`) usando el valor que viene en `pizzaData.img`.
- Es como decir: "La imagen de esta pizza será la misma que la que viene en `pizzaData`".

---

#### 9. **`this.preu = pizzaData.preu;`**

- Aquí asignamos el precio de la pizza (`preu`) usando el valor que viene en `pizzaData.preu`.
- Es como decir: "El precio de esta pizza será el mismo que el precio que viene en `pizzaData`".

---

### **¿Cómo se usa esta clase?**

Imagina que tienes un objeto con los datos de una pizza, como este:

```javascript
const pizzaData = {
    id: 1,
    nom: "Margarita",
    desc: "Pizza clásica con tomate y mozzarella",
    vegetariana: true,
    alergens: ["gluten", "lactosa"],
    img: "/images/margarita.jpg",
    preu: 8.99
};
```

Para crear una nueva pizza usando la clase `Pizza`, harías lo siguiente:

```javascript
const miPizza = new Pizza(pizzaData);
```

Ahora, `miPizza` es un objeto que tiene todas las propiedades de la pizza:

```javascript
console.log(miPizza.nom); // "Margarita"
console.log(miPizza.preu); // 8.99
console.log(miPizza.vegetariana); // true
```

---

### **Resumen:**

- La clase `Pizza` es como un molde para crear objetos que representan pizzas.
- El `constructor` es el método que se ejecuta cuando creas una nueva pizza.
- Cada propiedad de la pizza (como `id`, `nom`, `desc`, etc.) se asigna usando los datos que vienen en `pizzaData`.
- Esta clase es útil porque te permite crear muchas pizzas de manera fácil y organizada.

---

### **Ejemplo práctico:**

Si la API te devuelve una lista de pizzas, puedes usar esta clase para crear un objeto por cada pizza. Por ejemplo:

```javascript
const pizza1 = new Pizza({ id: 1, nom: "Margarita", desc: "Clásica", preu: 8.99 });
const pizza2 = new Pizza({ id: 2, nom: "Pepperoni", desc: "Con pepperoni", preu: 9.99 });
```

Ahora tienes dos objetos (`pizza1` y `pizza2`) que representan dos pizzas diferentes.

---

``` js title="obtenerPizzas.js"
import { Pizza } from '../medelo/pizza.js';

export function obtenerPizzas() {
    const url = 'https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes'; // URL de la API

    return fetch(url) // Hacemos la solicitud a la API
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => {
            console.log('Datos de la API:', data); // Mostramos los datos en la consola para depurar

            const pizzas = []; // Creamos un array vacío para guardar las pizzas

            // Recorremos cada pizza en los datos de la API
            for (let i = 0; i < data.records.length; i++) {
                const pizzaData = data.records[i]; // Obtenemos los datos de cada pizza
                const pizza = new Pizza(pizzaData); // Creamos una instancia de Pizza
                pizzas.push(pizza); // Añadimos la pizza al array
            }

            return pizzas; // Devolvemos el array de pizzas
        })
        .catch(error => {
            console.error('Error obteniendo las pizzas:', error); // Mostramos el error en la consola
            return []; // Devolvemos un array vacío en caso de error
        });
}
```

---

### **¿Qué hace esta función `obtenerPizzas`?**

Esta función se encarga de obtener datos de pizzas desde una API (un servidor que proporciona información) y luego convertir esos datos en objetos de tipo `Pizza` que podemos usar en nuestro programa.

---

### **Parte por parte**

#### 1. **`import { Pizza } from '../modelo/pizza.js';`**

- Aquí estamos importando la clase `Pizza` desde otro archivo llamado `pizza.js`.
- Esto nos permite usar la clase `Pizza` en este archivo para crear objetos que representen pizzas.
- La ruta `'../modelo/pizza.js'` indica dónde se encuentra el archivo `pizza.js`. (`../` significa "subir un nivel" en la estructura de carpetas).

---

#### 2. **`export function obtenerPizzas() { ... }`**

- Aquí estamos definiendo una función llamada `obtenerPizzas`.
- La palabra `export` significa que esta función se puede usar en otros archivos de JavaScript. Es como decir: "Esta función está disponible para que otros la usen".

---

#### 3. **`const url = 'https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes';`**

- Aquí definimos una constante llamada `url` que contiene la dirección (URL) de la API desde la cual vamos a obtener los datos de las pizzas.
- Esta URL es como la "dirección de la casa" del servidor donde están guardadas las pizzas.

---

#### 4. **`return fetch(url)`**

- `fetch` es una función de JavaScript que se usa para hacer solicitudes HTTP, es decir, para pedir datos a un servidor.
- Aquí estamos haciendo una solicitud a la URL que definimos antes (`url`).
- `fetch` devuelve una **promesa**, que es una forma de manejar operaciones asíncronas (cosas que tardan un poco en completarse, como una solicitud a un servidor).

---

#### 5. **`.then(response => response.json())`**

- Cuando la solicitud a la API se completa, recibimos una respuesta (`response`).
- Esta respuesta no está en un formato que podamos usar directamente, así que la convertimos a JSON (un formato de datos que JavaScript entiende) usando `response.json()`.
- `response.json()` también devuelve una promesa, por lo que usamos otro `.then` para manejar los datos convertidos.

---

#### 6. **`.then(data => { ... })`**

- Aquí recibimos los datos de la API ya convertidos a JSON.
- Estos datos se guardan en la variable `data`.
- Ahora podemos trabajar con estos datos.

---

#### 7. **`console.log('Datos de la API:', data);`**

- Esto es solo para depurar (es decir, para ver qué datos estamos recibiendo).
- Muestra los datos de la API en la consola del navegador. Es útil para asegurarnos de que todo está funcionando correctamente.

---

#### 8. **`const pizzas = [];`**

- Aquí creamos un array vacío llamado `pizzas`.
- Este array lo usaremos para guardar todas las pizzas que creemos a partir de los datos de la API.

---

#### 9. **`for (let i = 0; i < data.records.length; i++) { ... }`**

- Este es un bucle `for` que recorre cada pizza en los datos de la API.
- `data.records` es un array que contiene todas las pizzas que nos devolvió la API.
- `data.records.length` nos dice cuántas pizzas hay en total.
- El bucle se ejecuta una vez por cada pizza.

---

#### 10. **`const pizzaData = data.records[i];`**

- En cada iteración del bucle, `data.records[i]` nos da los datos de una pizza específica.
- Guardamos esos datos en una variable llamada `pizzaData`.

---

#### 11. **`const pizza = new Pizza(pizzaData);`**

- Aquí creamos una nueva instancia de la clase `Pizza` usando los datos de la pizza (`pizzaData`).
- Esto significa que estamos creando un objeto `Pizza` con todas las propiedades que definimos en la clase (como `id`, `nom`, `desc`, etc.).

---

#### 12. **`pizzas.push(pizza);`**

- Aquí añadimos la pizza que acabamos de crear al array `pizzas`.
- `push` es un método que añade un elemento al final de un array.

---

#### 13. **`return pizzas;`**

- Una vez que hemos creado todas las pizzas y las hemos añadido al array `pizzas`, devolvemos ese array.
- Esto significa que cuando llamemos a la función `obtenerPizzas`, obtendremos un array con todas las pizzas.

---

#### 14. **`.catch(error => { ... })`**

- Si algo sale mal (por ejemplo, si la API no responde o hay un error de red), el código dentro de `.catch` se ejecutará.
- Aquí mostramos el error en la consola usando `console.error`.

---

#### 15. **`return [];`**

- Si hay un error, devolvemos un array vacío `[]`.
- Esto evita que el programa se rompa y nos permite manejar el error de manera elegante.

---

### **¿Cómo se usa esta función?**

Puedes llamar a la función `obtenerPizzas` desde otro archivo y trabajar con las pizzas que devuelve. Por ejemplo:

```javascript
obtenerPizzas().then(pizzas => {
    console.log('Pizzas obtenidas:', pizzas); // Aquí tienes el array de pizzas
    // Puedes hacer algo con las pizzas, como mostrarlas en la página
});
```

---

### **Resumen**

1. La función `obtenerPizzas` hace una solicitud a una API para obtener datos de pizzas.
2. Convierte esos datos en objetos de tipo `Pizza`.
3. Devuelve un array con todas las pizzas.
4. Si hay un error, devuelve un array vacío y muestra el error en la consola.

---

### **Ejemplo de flujo:**

1. Hacemos una solicitud a la API.
2. La API nos devuelve datos en formato JSON.
3. Convertimos esos datos en objetos `Pizza`.
4. Devolvemos un array con todas las pizzas.

``` js title="pizzaCard.js"
export class PizzaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set pizza(pizza) {
        console.log('Pizza recibida:', pizza);
        const defaultImg = 'https://static.vecteezy.com/system/resources/previews/007/404/906/non_2x/slice-of-pizza-cartoon-cartoon-illustration-cartoon-clipart-free-vector.jpg';

        const pizzaImage = pizza.img
            ? `https://pizza-rest-server-production.up.railway.app${pizza.img}`
            : defaultImg;

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 10px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 250px;
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                }

                :host .pizza-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                :host .preu {
                    background-color: #ffdd00;
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid #efcd00;
                    margin: 2px;
                    display: inline-block;
                }

                :host img {
                    max-width: 100%;
                    border-radius: 8px;
                    height: auto;
                }

                :host .vegetariana {
                    color: green;
                    font-weight: bold;
                }

                :host .no-vegetariana {
                    color: red;
                    font-weight: bold;
                }
            </style>
            <div class="pizza-card">
                <h3>${pizza.nom}</h3>
                <img src="${pizzaImage}" alt="${pizza.nom}">
                <p>${pizza.desc}</p>
                <span class="preu">${pizza.preu} €</span>
                <p class="${pizza.vegetariana ? 'vegetariana' : 'no-vegetariana'}">
                    ${pizza.vegetariana ? '🍃 Vegetariana' : '🍖 No Vegetariana'}
                </p>
            </div>
        `;

        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('pizza-card', PizzaCard);
```

---

### **¿Qué es esta clase `PizzaCard`?**

Esta clase es un **Web Component**, es decir, un componente personalizado de HTML que puedes usar en tu página web como si fuera una etiqueta HTML normal (por ejemplo, `<pizza-card>`). Este componente se encarga de mostrar la información de una pizza de manera visual, como una tarjeta.

---

### **Parte por parte**

#### 1. **`export class PizzaCard extends HTMLElement { ... }`**

- Aquí estamos definiendo una clase llamada `PizzaCard`.
- La palabra `export` significa que esta clase se puede usar en otros archivos de JavaScript.
- `extends HTMLElement` indica que esta clase es un componente personalizado de HTML. Hereda todas las propiedades y métodos de `HTMLElement`, que es la clase base para todos los elementos HTML.

---

#### 2. **`constructor() { ... }`**

- El `constructor` es un método especial que se ejecuta automáticamente cuando creas una nueva instancia de la clase (es decir, cuando usas `<pizza-card>` en tu HTML).
- `super()` llama al constructor de la clase padre (`HTMLElement`). Esto es necesario para que el componente funcione correctamente.
- `this.attachShadow({ mode: 'open' });` crea un **Shadow DOM** para el componente. El Shadow DOM es como un "DOM privado" que permite encapsular el estilo y la estructura del componente, evitando que se mezcle con el resto de la página.

---

#### 3. **`set pizza(pizza) { ... }`**

- Este es un **setter**, un método especial que se ejecuta cuando le asignas un valor a la propiedad `pizza` del componente.
- Aquí, `pizza` es un objeto que contiene los datos de una pizza (como su nombre, descripción, precio, etc.).
- Este método se encarga de tomar esos datos y mostrarlos en la tarjeta.

---

#### 4. **`console.log('Pizza recibida:', pizza);`**

- Esto es solo para depurar. Muestra los datos de la pizza en la consola del navegador, para que puedas ver qué información está llegando al componente.

---

#### 5. **`const defaultImg = '...';`**

- Aquí definimos una imagen por defecto que se usará si la pizza no tiene una imagen (`pizza.img`).

---

#### 6. **`const pizzaImage = pizza.img ? ... : defaultImg;`**

- Esto es un **operador ternario**. Verifica si la pizza tiene una imagen (`pizza.img`).
- Si tiene una imagen, la usa. Si no, usa la imagen por defecto (`defaultImg`).

---

#### 7. **`const template = document.createElement('template');`**

- Aquí creamos un elemento `<template>`. Los templates son una forma de definir fragmentos de HTML que no se renderizan inmediatamente, pero que podemos clonar y usar más tarde.

---

#### 8. **`template.innerHTML = \`...\`;`**

- Aquí definimos el contenido del template usando **template literals** (las comillas invertidas `` ` ``).
- Dentro del template, definimos la estructura HTML y los estilos CSS que se usarán para mostrar la tarjeta de la pizza.

---

#### 9. **Estilos CSS dentro del template**

- Los estilos están definidos dentro de un bloque `<style>`.
- `:host` se refiere al propio componente `<pizza-card>`. Aquí le damos estilos como márgenes, bordes, colores, etc.
- `.pizza-card`, `.preu`, `img`, `.vegetariana`, y `.no-vegetariana` son clases que usamos para estilizar diferentes partes de la tarjeta.

---

#### 10. **Contenido HTML dentro del template**

- Aquí definimos la estructura de la tarjeta usando los datos de la pizza (`pizza.nom`, `pizza.desc`, `pizza.preu`, etc.).
- Por ejemplo, `${pizza.nom}` inserta el nombre de la pizza en el HTML.

---

#### 11. **`this.shadowRoot.innerHTML = '';`**

- Aquí limpiamos el contenido actual del Shadow DOM para evitar duplicados.

---

#### 12. **`this.shadowRoot.appendChild(template.content.cloneNode(true));`**

- Aquí clonamos el contenido del template y lo añadimos al Shadow DOM del componente.
- Esto hace que el contenido del template se renderice en la página.

---

#### 13. **`customElements.define('pizza-card', PizzaCard);`**

- Aquí registramos el componente personalizado en el navegador.
- Esto permite usar la etiqueta `<pizza-card>` en el HTML.

---

### **Resumen**

1. **¿Qué hace esta clase?**
   - Crea un componente personalizado (`<pizza-card>`) que muestra una tarjeta con la información de una pizza.
   - Usa el Shadow DOM para encapsular el estilo y la estructura del componente.
   - Recibe los datos de la pizza a través de una propiedad (`pizza`) y los muestra en la tarjeta.

2. **¿Cómo funciona?**
   - Cuando creas una instancia de `<pizza-card>` y le asignas una pizza, el componente toma los datos y los muestra en una tarjeta con estilos y estructura definidos.

3. **¿Para qué sirve?**
   - Para mostrar pizzas de manera visual en una página web, de forma modular y reutilizable.

---

### **Ejemplo de flujo**

1. Creas un elemento `<pizza-card>` en tu HTML o JavaScript.
2. Le asignas una pizza usando la propiedad `pizza`:

   ```javascript
   const pizzaCard = document.createElement('pizza-card');
   pizzaCard.pizza = {
       nom: "Margarita",
       desc: "Pizza clásica con tomate y mozzarella",
       vegetariana: true,
       preu: 8.99,
       img: "/images/margarita.jpg"
   };
   document.body.appendChild(pizzaCard);
   ```

3. El componente toma los datos de la pizza y los muestra en una tarjeta con estilos y estructura definidos.

---

### **Preguntas para reflexionar:**

1. **¿Qué es el Shadow DOM y por qué se usa en este componente?**
   - El Shadow DOM es un "DOM privado" que encapsula el estilo y la estructura del componente, evitando que se mezcle con el resto de la página.

2. **¿Qué hace el método `set pizza(pizza)`?**
   - Toma los datos de una pizza y los usa para actualizar el contenido del componente.

3. **¿Por qué se usa un `<template>` en este componente?**
   - Para definir la estructura y los estilos del componente de manera reutilizable y eficiente.

4. **¿Qué pasa si una pizza no tiene imagen?**
   - El componente usa una imagen por defecto (`defaultImg`).

5. **¿Cómo se registra el componente personalizado en el navegador?**
   - Usando `customElements.define('pizza-card', PizzaCard);`.

---

### **Preguntas para ti:**

1. ¿Qué pasaría si no usáramos `this.attachShadow({ mode: 'open' });` en el constructor?
2. ¿Cómo podrías modificar el componente para que muestre más información, como los alérgenos?
3. ¿Qué ventajas tiene usar un Web Component como `<pizza-card>` en lugar de crear la tarjeta directamente en el HTML?

---

## main.js

``` js title="main.js"
import { obtenerPizzas } from './servicio/obtenerPizzas.js';
import "./vista/PizzaCard.js";

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pizzes-container');

    obtenerPizzas().then(pizzas => {
        console.log('Número de pizzas:', pizzas.length);
        pizzas.forEach(pizza => {
            console.log('Creando tarjeta para:', pizza.nom);
            const pizzaCard = document.createElement('pizza-card');
            pizzaCard.pizza = pizza;
            container.appendChild(pizzaCard);
        });
    });
});
```

¡Vamos a desglosar esta parte del código con detalle! Esta sección es la que se encarga de obtener las pizzas desde la API y mostrarlas en la página usando el componente `<pizza-card>`. Te explicaré paso a paso qué hace cada línea, y al final te daré un resumen, un ejemplo de flujo y algunas preguntas para que reflexiones si has entendido bien. 😊

---

### **¿Qué hace este código?**

Este código se ejecuta cuando la página ha terminado de cargarse (`DOMContentLoaded`). Su función es:

1. Obtener las pizzas desde una API.
2. Crear una tarjeta (`<pizza-card>`) por cada pizza.
3. Añadir las tarjetas al contenedor en la página.

---

### **Parte por parte**

#### 1. **`import { obtenerPizzas } from './servicio/obtenerPizzas.js';`**

- Aquí estamos importando la función `obtenerPizzas` desde el archivo `obtenerPizzas.js`.
- Esta función se encarga de hacer una solicitud a la API y devolver un array de pizzas.

---

#### 2. **`import "./vista/PizzaCard.js";`**

- Aquí estamos importando el componente `PizzaCard` desde el archivo `PizzaCard.js`.
- Esto es necesario para poder usar la etiqueta `<pizza-card>` en nuestro código.

---

#### 3. **`window.addEventListener('DOMContentLoaded', () => { ... });`**

- Aquí estamos añadiendo un "escuchador de eventos" que se activa cuando la página ha terminado de cargarse (`DOMContentLoaded`).
- Esto asegura que el código dentro de la función no se ejecute hasta que el HTML esté completamente cargado y listo.

---

#### 4. **`const container = document.getElementById('pizzes-container');`**

- Aquí obtenemos el contenedor donde se añadirán las tarjetas de pizza.
- `pizzes-container` es el ID del elemento HTML que actuará como contenedor.

---

#### 5. **`obtenerPizzas().then(pizzas => { ... });`**

- Aquí llamamos a la función `obtenerPizzas`, que devuelve una promesa.
- Cuando la promesa se resuelve (es decir, cuando la API devuelve los datos), ejecutamos el código dentro de `.then`.
- El parámetro `pizzas` es un array con todas las pizzas que obtuvimos de la API.

---

#### 6. **`console.log('Número de pizzas:', pizzas.length);`**

- Esto es solo para depurar. Muestra en la consola cuántas pizzas se obtuvieron de la API.

---

#### 7. **`pizzas.forEach(pizza => { ... });`**

- Aquí recorremos cada pizza en el array `pizzas`.
- Por cada pizza, ejecutamos el código dentro del bucle.

---

#### 8. **`console.log('Creando tarjeta para:', pizza.nom);`**

- Esto es solo para depurar. Muestra en la consola el nombre de la pizza que se está procesando.

---

#### 9. **`const pizzaCard = document.createElement('pizza-card');`**

- Aquí creamos un nuevo elemento `<pizza-card>` usando `document.createElement`.
- Este es el componente personalizado que definimos en `PizzaCard.js`.

---

#### 10. **`pizzaCard.pizza = pizza;`**

- Aquí asignamos la pizza al componente `<pizza-card>`.
- Esto activa el `set pizza(pizza)` en la clase `PizzaCard`, que actualiza el contenido de la tarjeta con los datos de la pizza.

---

#### 11. **`container.appendChild(pizzaCard);`**

- Aquí añadimos la tarjeta de pizza al contenedor en la página.
- Esto hace que la tarjeta se muestre en el lugar correcto.

---

### **Resumen**

1. **¿Qué hace este código?**
   - Obtiene las pizzas desde una API.
   - Crea una tarjeta (`<pizza-card>`) por cada pizza.
   - Añade las tarjetas al contenedor en la página.

2. **¿Cómo funciona?**
   - Cuando la página termina de cargarse, se llama a la función `obtenerPizzas`.
   - Por cada pizza, se crea un componente `<pizza-card>` y se añade al contenedor.

3. **¿Para qué sirve?**
   - Para mostrar dinámicamente las pizzas en la página, usando un componente personalizado.

---

### **Ejemplo de flujo**

1. La página termina de cargarse.
2. Se llama a `obtenerPizzas`, que hace una solicitud a la API.
3. La API devuelve un array de pizzas.
4. Por cada pizza:
   - Se crea un `<pizza-card>`.
   - Se asignan los datos de la pizza al componente.
   - Se añade la tarjeta al contenedor.
5. Las tarjetas se muestran en la página.

---

### **Preguntas para reflexionar**

1. **¿Qué pasa si la API no devuelve ninguna pizza?**
   - El array `pizzas` estaría vacío, y no se crearían tarjetas.

2. **¿Por qué es importante usar `window.addEventListener('DOMContentLoaded', ...)`?**
   - Para asegurarnos de que el código no se ejecute hasta que el HTML esté completamente cargado.

3. **¿Qué pasaría si el contenedor (`pizzes-container`) no existe en el HTML?**
   - `container` sería `null`, y el código daría un error al intentar añadir las tarjetas.

4. **¿Cómo podrías modificar este código para mostrar un mensaje si no hay pizzas?**
   - Podrías añadir una condición para verificar si `pizzas.length` es 0 y mostrar un mensaje en el contenedor.

5. **¿Qué ventajas tiene usar un componente personalizado como `<pizza-card>`?**
   - Permite reutilizar el código y mantener la lógica y el estilo encapsulados.

---

### **Preguntas para ti**

1. ¿Qué pasaría si la API tarda mucho en responder? ¿Cómo podrías mejorar la experiencia del usuario?
2. ¿Cómo podrías modificar este código para que las tarjetas se muestren en un orden específico (por ejemplo, por precio)?
3. ¿Qué harías si quisieras añadir un botón para recargar las pizzas sin recargar la página?

---
