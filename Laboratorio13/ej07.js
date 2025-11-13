function tieneDuplicados(arr) {
  return new Set(arr).size !== arr.length;
}

function main() {
  let entrada = prompt("Ingresa números separados por comas:");
  let numeros = entrada.split(",").map(Number);
  let hayDuplicados = tieneDuplicados(numeros);
  alert(hayDuplicados ? "Hay duplicados" : "No hay duplicados");
}

main();
