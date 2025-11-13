let num = parseInt(prompt("Ingrese un número: "));

const resultado = (num) => {
    return "Al cuadrado: "+Math.pow(num,2)+"\n"
    +"Al cubo: "+Math.pow(num,3)+"\n"
    +"Raiz cuadrada: "+Math.sqrt(num).toFixed(2);
}

alert (resultado(num));