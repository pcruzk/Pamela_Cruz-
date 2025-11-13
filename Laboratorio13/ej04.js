function filtrarYTransformar(arr) {
  return arr.filter(n => n >= 0)
            .map(n => n ** 2)
            .reduce((a, b) => a + b, 0);
}

function main() {
  let entrada = prompt("Ingresa números (ej: 2, -3, 4, -1, 5):");
  let numeros = entrada.split(",").map(Number);
  let suma = filtrarYTransformar(numeros);
  alert("Suma de cuadrados de números positivos: " + suma);
}

main();
