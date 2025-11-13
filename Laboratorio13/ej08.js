const productos = new Map([
  ["pan", 1.5],
  ["leche", 3.2],
  ["huevo", 0.8],
  ["queso", 5.0]
]);

function calcularTotal(lista) {
  let total = 0;
  for (let item of lista) {
    if (productos.has(item)) total += productos.get(item);
  }
  return total;
}

function main() {
  let entrada = prompt("Ingresa productos separados por comas (pan, leche, etc.):");
  let lista = entrada.split(",").map(p => p.trim());
  let total = calcularTotal(lista);
  alert("Total de la compra: S/ " + total.toFixed(2));
}

main();
