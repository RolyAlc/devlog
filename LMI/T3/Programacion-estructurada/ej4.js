//Declara Vector
const ciudades = ["Valencia", "Alacante", "Castello"];

//Recorre el vector con un bucle
console.log("Ciudades de Valencia: ");
/*for (const ciudad of ciudades) {
    console.log(ciudad);
}*/

for (i = 0, len = ciudades.length, text = ""; i < len; i++) {
    console.log(ciudades[i]);

}