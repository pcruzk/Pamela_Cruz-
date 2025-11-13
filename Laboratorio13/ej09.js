function contarPalabras(texto) {
  const palabras = texto.toLowerCase().split(" ");
  const mapa = new Map();

  for (let p of palabras) {
    mapa.set(p, (mapa.get(p) || 0) + 1);
  }

  let resultado = "";
  for (let [clave, valor] of mapa) {
    resultado += `${clave}: ${valor}\n`;
  }
  alert("Conteo de palabras:\n" + resultado);
}

function main() {
  let texto = prompt("Escribe un texto:");
  contarPalabras(texto);
}

main();