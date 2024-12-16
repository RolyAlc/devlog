//Definir objeto JSON
let libro = {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes Saavedra",
    "año": "1605"
};
//Mostrar titulo del libro JSON por consola
console.log("Titulo del libro: " + libro.titulo);

//Añadir nueva propiedad al objeto JSON [libro]
libro.editorial = "Urbano Manini"

//Salida actualizada //buscar dif entre + y ,
console.log("Información del libro actualizado: ", libro);