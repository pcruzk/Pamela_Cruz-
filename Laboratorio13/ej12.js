function contarLetras(texto) {
  const conteo = {};
  for (let letra of texto.toLowerCase()) {
    if (/[a-záéíóúñ]/i.test(letra)) {
      conteo[letra] = (conteo[letra] || 0) + 1;
    }
  }
  return conteo;
}

function main() {
  let texto = prompt("Ingresa una palabra:");
  let letras = contarLetras(texto);
  alert("Conteo de letras:\n" + JSON.stringify(letras, null, 2));
}

main();
