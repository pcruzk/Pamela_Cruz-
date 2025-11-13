let num1 = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese otro número: "))

let min = Math.min(num1,num2);
let max = Math.max(num1,num2);

const numeroAleatorio = (min, max) => {
    return Math.round(Math.random()*(max-min)+(min));
}

alert (numeroAleatorio(min,max));