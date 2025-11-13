const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  detalles() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
};

function main() {
  alert(auto.detalles());
}

main();
