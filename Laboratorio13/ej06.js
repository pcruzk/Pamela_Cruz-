function main() {
  let entrada = prompt("Ingresa nombres separados por comas:");
  let nombres = new Set(entrada.split(",").map(n => n.trim()));
  alert("Nombres sin duplicados: " + Array.from(nombres).join(", "));
}

main();
