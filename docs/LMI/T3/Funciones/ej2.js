function salutacio(amic="amic") {
    let salutacio = `Hola, ${amic}!`
        return function () {
            console.log(salutacio);
        };
}

let saludaJoan = salutacio("Joan");
saludaJoan();
let saludaEric = salutacio("Eric");
saludaEric();
let saludaAmic = salutacio();
saludaAmic();