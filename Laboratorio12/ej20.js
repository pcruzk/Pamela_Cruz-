function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}

function mainOperacion() {
    const x = parseFloat(prompt("Ingrese el primer número:"));
    const y = parseFloat(prompt("Ingrese el segundo número:"));
    const operacion = prompt("Operación (sumar/restar/multiplicar/dividir):");

    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => (b === 0 ? "Error" : a / b);

    let resultado;
    if (operacion === "sumar") resultado = ejecutarOperacion(sumar, x, y);
    else if (operacion === "restar") resultado = ejecutarOperacion(restar, x, y);
    else if (operacion === "multiplicar") resultado = ejecutarOperacion(multiplicar, x, y);
    else if (operacion === "dividir") resultado = ejecutarOperacion(dividir, x, y);
    else resultado = "Operación no válida";

    alert("Resultado: " + resultado);
}