const mostrar = document.querySelector('.display');
mostrar.textContent = '0'
let number = {
    x: null,
    y: null
};

let operador = null

let numbers = []


function numUno(){
    numbers.push(1);
    mostrar.textContent = numbers.join("");
}

function numDos(){
    numbers.push(2);
    mostrar.textContent = numbers.join("");
}

function sumar() {
   alo = numbers.join("");
   numbers = []
   mostrar.textContent = 'Prueba'
   if (number.x === null){
    number.x = alo;
   }
   else if (number.y === null){
    number.y = alo;
   }
   console.log(number)
   operador = 'mas'
}

function igualdad() {
    if (operador === 'mas'){
        resultado = number.x + number.y;
        mostrar.textContent = resultado;
        number.y = null;
        number.x = null;
    }

}


function borrar() {
    numbers = []
    number.x = null;
    number.y = null;
    mostrar.textContent = '0'
}

/*
function sumar() {
let sumador = 0;
for (let i = 0; i < numbers.length; i++){
    sumador += numbers[i];
    mostrar.textContent = sumador;
}
numbers = []
}
*/
