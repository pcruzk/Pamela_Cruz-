let a=parseInt(prompt("Ingrese la primera nota: "));
let b=parseInt(prompt("Ingrese la segunda nota: "));
let c=parseInt(prompt("Ingrese la tercera nota: "));

const promedio = function(a,b,c) {
    return "Promedio: "+(a+b+c)/3;
};

alert(promedio(a,b,c));