//Vector
let diasSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

console.log("2º dia de la semana: " + diasSemana[1]);
console.log("5º dia de la semana: " + diasSemana[4]);

diasSemana[diasSemana.length -1] = "Dia desconocido";

console.log("Vector actualizado: ", diasSemana);