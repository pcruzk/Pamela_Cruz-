function combinarCatalogos(tiendaA, tiendaB) {
  const resultado = { ...tiendaA };

  for (let producto in tiendaB) {
    if (resultado[producto]) {
      resultado[producto] = Math.min(resultado[producto], tiendaB[producto]);
    } else {
      resultado[producto] = tiendaB[producto];
    }
  }

  for (let p in resultado) {
    resultado[p] = parseFloat(resultado[p].toFixed(2));
  }

  return resultado;
}

function main() {
  const tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
  const tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };

  const resultado = combinarCatalogos(tiendaA, tiendaB);
  alert("Catálogo combinado:\n" + JSON.stringify(resultado, null, 2));
}

main();
