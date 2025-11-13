function reordenarPalabras(oracion) {
  return oracion.split(" ")
                .map(p => p.toUpperCase())
                .sort();
}

function main() {
  let texto = prompt("Escribe una oración:");
  let resultado = reordenarPalabras(texto);
  alert("Palabras ordenadas: " + resultado.join(", "));
}

main();
