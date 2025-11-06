function filtrarArreglo(arr, callback) {
    return arr.filter(callback);
}

function mainFiltrar() {
    const entrada = prompt("Ingrese números separados por comas:");
    const arr = entrada.split(",").map(Number);
    const limite = parseFloat(prompt("Mostrar mayores a:"));
    const resultado = filtrarArreglo(arr, n => n > limite);
    alert("Filtrados: " + resultado.join(", "));
}