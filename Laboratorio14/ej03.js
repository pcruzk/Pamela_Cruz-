let num = parseFloat(prompt("Ingrese el número a redondear: "));

const redondear = (num) => {
    return "Redondeado hacia abajo = "+Math.floor(num)+
    "\n"+"Redondeado hacia arriba = "+Math.ceil(num)+
    "\n"+"Redondeo normal = "+Math.round(num);
}

alert (redondear(num));