function determinarDia(numDia) {
    let dia;

    switch (numDia) {
        case 1:
            dia = "Dilluns";
            break;
        case 2:
            dia = "Dimarts";
            break;
        case 3:
            dia = "Dimecres";
            break;
        case 4:
            dia = "Dijous";
            break;
        case 5:
            dia = "Divendres";
            break;
        case 6:
            dia = "Dissabte";
            break;
        case 7:
            dia = "Diumenge";
            break;

        default:
            dia = "Número no válido. Introduce un número del 1 al 7";
            break;
    }
    return dia;
}

//Ejemplos de uso
let dia1 = determinarDia(1);
let dia2 = determinarDia(5);
let dia3 = determinarDia(7);
let diaInvalido = determinarDia(9);

//Salida
console.log(dia1);
console.log(dia2);
console.log(dia3);
console.log(diaInvalido);