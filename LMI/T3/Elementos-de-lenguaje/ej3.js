//Variables
let num = 10;
let cadena = "20";

// concatenar
let resultadoString = num + cadena;
//Transformar a num el string
let resultadoNum = num + Number(cadena);

//Salida
console.log("El resultado de la operación es: " + resultadoString);
console.log("El tipo de variable de: " + resultadoString + " es: " + typeof resultadoString);

//Comprobar que se pueda sumar
console.log("El resultado de la operación es: " + resultadoNum);
console.log("El tipo de variable de: " + resultadoNum + " es: " + typeof resultadoNum);


//Si son dos numeros, esta se suma, de lo contrario realiza un concatenación entre ellas.
//La variable num automaticamente se convierte en cadena de texto para que pueda concatenear con la cadena existente
//Para poder sumar, la cadena de texto se deberá tranformar en num, con Number(x)