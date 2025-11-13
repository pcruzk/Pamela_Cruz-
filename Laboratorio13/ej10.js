function invertirMap(map) {
  const nuevo = new Map();
  for (let [clave, valor] of map) {
    nuevo.set(valor, clave);
  }
  return nuevo;
}

function main() {
  const capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
  ]);
  const invertido = invertirMap(capitales);
  let texto = "";
  for (let [k, v] of invertido) texto += `${k} => ${v}\n`;
  alert("Mapa invertido:\n" + texto);
}

main();
