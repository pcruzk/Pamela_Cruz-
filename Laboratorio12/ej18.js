function media(...numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((a, b) => a + b, 0);
    return suma / numeros.length;
}

function mainMedia() {
    const entrada = prompt("Ingrese números separados por comas:");
    const arr = entrada.split(",").map(Number);
    alert("Promedio: " + media(...arr));
}   