function operacionesMatematicas() {
    const a = parseFloat(prompt("Ingrese el primer número:"));
    const b = parseFloat(prompt("Ingrese el segundo número:"));

    const sumar = () => a + b;
    const restar = () => a - b;
    const multiplicar = () => a * b;
    const dividir = () => (b === 0 ? "Error: no se puede dividir entre 0" : a / b);

    const operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir):");

    let resultado;
    if (operacion === "sumar") {
        resultado = sumar();
    } else if (operacion === "restar") {
        resultado = restar();
    } else if (operacion === "multiplicar") {
        resultado = multiplicar();
    } else if (operacion === "dividir") {
        resultado = dividir();
    } else {
        resultado = "Operación no válida";
    }

    alert("Resultado: " + resultado);
}

operacionesMatematicas();
