function verificarHora(hora) {
    let mensaje;

    if (hora >= 6 && hora <= 12) {
        mensaje = "Buenos dias"
    } else if (hora >= 13 && hora <= 20) {
        mensaje = "Buenas tardes"
    } else if ((hora >= 0 && hora < 6) || (hora > 20 && hora <= 23)) {
        mensaje = "Buenas noches"
    } else {
        mensaje = "Hora no valida. Introduce un número entre 0 y 23"
    }

    return mensaje; //Devolver el mensaje almacenado
}

//Ejemplos de uso
let saludo1 = verificarHora(7);
let saludo2 = verificarHora(15);
let saludo3 = verificarHora(22);
let saludo4 = verificarHora(25);

console.log(saludo1)
console.log(saludo2)
console.log(saludo3)
console.log(saludo4)