class Producto {
  #nombre;
  #precio;
  #stock;

  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.setPrecio(precio);
    this.setStock(stock);
  }

  // Getters
  getNombre() {
    return this.#nombre;
  }

  getPrecio() {
    return "$" + this.#precio.toFixed(2);
  }

  getStock() {
    return this.#stock;
  }

  // Setters
  setPrecio(precio) {
    let valor = Number(precio);

    if (!isNaN(valor) && valor > 0) {
      this.#precio = valor;
    } else {
      alert("El precio debe ser un número mayor a 0.");
    }
  }

  setStock(stock) {
    if (stock >= 0) {
      this.#stock = stock;
    } else {
      alert("El stock no puede ser negativo.");
    }
  }

  vender(cantidad) {
    if (cantidad <= 0) {
      alert("La cantidad a vender debe ser mayor a 0.");
      return;
    }

    if (cantidad > this.#stock) {
      alert("No hay suficiente stock. Solo quedan " + this.#stock + " unidades de " + this.#nombre + ".");
    } else {
      this.#stock -= cantidad;
      alert("Venta realizada: " + cantidad + " unidades de " + this.#nombre +
        "\nStock restante: " + this.#stock);
    }
  }

  mostrarInfo() {
    alert("Producto: " + this.#nombre +
      "\nPrecio: " + this.getPrecio() +
      "\nStock: " + this.#stock + " unidades");
  }
}

const producto1 = new Producto("Monitor LED", "120.5", 5);
producto1.mostrarInfo();

producto1.setPrecio(200);    
producto1.mostrarInfo();

producto1.setPrecio("350.99");
producto1.mostrarInfo();

producto1.setPrecio("-20");  