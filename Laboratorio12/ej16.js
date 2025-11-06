function acumulador(valorInicial) {
    let total = valorInicial;
    return (nuevoValor) => (total += nuevoValor);
}

function mainAcumulador() {
    const inicial = parseFloat(prompt("Ingrese un valor inicial:"));
    const acum = acumulador(inicial);
    const suma = parseFloat(prompt("Ingrese un valor a sumar:"));
    alert("Nuevo total: " + acum(suma));
}