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

function numTres(){
    numbers.push(3);
    mostrar.textContent = numbers.join("");
}

function numCuatro(){
    numbers.push(4);
    mostrar.textContent = numbers.join("");
}

function numCinco(){
    numbers.push(5);
    mostrar.textContent = numbers.join("");
}

function numSeis(){
    numbers.push(6);
    mostrar.textContent = numbers.join("");
}

function numSiete(){
    numbers.push(7);
    mostrar.textContent = numbers.join("");
}

function numOcho(){
    numbers.push(8);
    mostrar.textContent = numbers.join("");
}

function numNueve(){
    numbers.push(9);
    mostrar.textContent = numbers.join("");
}

function numCero(){
    numbers.push(0);
    mostrar.textContent = numbers.join("");
}

function sumar() {
   alo = numbers.join("");
   numbers = []
   if (number.x === null){
    number.x = alo;
   }
   else if (number.y === null){
    number.y = alo;
   }
   if (number.y === ''){
    mostrar.textContent = 0;
   } else {
   mostrar.textContent = alo;}
   console.log(number)
   operador = 'mas'
}

function resta() {
    alo = numbers.join("");
    numbers = []
    if (number.x === null){
     number.x = alo;
    }
    else if (number.y === null){
     number.y = alo;
    }
    if (number.y === ''){
        mostrar.textContent = 0;
       } else {
       mostrar.textContent = alo;}
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
    if (number.y === ''){
        mostrar.textContent = 0;
       } else {
       mostrar.textContent = alo;}
    console.log(number)
    operador = 'mul'
 }

 function division() {
    alo = numbers.join("");
    numbers = []
    mostrar.textContent = alo;
    if (number.x === null){
     number.x = alo;
    }
    else if (number.y === null){
     number.y = alo;
    }
    if (number.y === ''){
        mostrar.textContent = 0;
       } else {
       mostrar.textContent = alo;}
    console.log(number)
    operador = 'division'
 }
function igualdad() {
    alo = numbers.join("");
    numbers = []
    mostrar.textContent = alo;
    number.y = alo;
    if (operador === 'mas'){
        resultado = Number(number.x) + Number(number.y);
        mostrar.textContent = resultado;
        number.x = resultado;
        number.y = null;
    }
    else if (operador === 'resta'){
        resultado = Number(number.x) - Number(number.y);
        mostrar.textContent = resultado;
        number.x = resultado;
        number.y = null; 
    }
    else if (operador === 'mul'){
        resultado = Number(number.x) * Number(number.y);
        mostrar.textContent = resultado;
        number.x = resultado;
        number.y = null;
    }

    else if (operador === 'division'){
        resultado = Number(number.x) / Number(number.y);
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
