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
   mostrar.textContent = alo;
   if (number.x === null){
    number.x = alo;
   }
   else if (number.y === null){
    number.y = alo;
   }
   console.log(number)
   operador = 'mas'
}

function resta() {
    alo = numbers.join("");
    numbers = []
    mostrar.textContent = alo;
    if (number.x === null){
     number.x = alo;
    }
    else if (number.y === null){
     number.y = alo;
    }
    console.log(number)
    operador = 'resta'
 }

 function multiplicar() {
    alo = numbers.join("");
    numbers = []
    mostrar.textContent = alo;
    if (number.x === null){
     number.x = alo;
    }
    else if (number.y === null){
     number.y = alo;
    }
    console.log(number)
    operador = 'multiplicar'
 }

function igualdad() {
    alo = numbers.join("");
    numbers = []
    mostrar.textContent = alo;
    number.y = alo;
    if (operador === 'mas'){
        resultado = Number(number.x) + Number(number.y);
        mostrar.textContent = resultado;
        number.y = null;
        number.x = resultado;
    }
    else if (operador === 'resta'){
        resultado = Number(number.x) - Number(number.y);
        mostrar.textContent = resultado;
        number.x = resultado;
        number.y = null; 
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
