function doblarNumeros(arr) {
  return arr.map(num => num * 2);
}

function main() {
  let entrada = prompt("Ingresa números separados por comas:");
  let numeros = entrada.split(",").map(Number);
  let resultado = doblarNumeros(numeros);
  alert("Números duplicados: " + resultado.join(", "));
}

main();
