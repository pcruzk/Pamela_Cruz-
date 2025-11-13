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
    return this.#precio;
  }

  getStock() {
    return this.#stock;
  }

  // Setters
  setPrecio(precio) {
    if (precio > 0) {
      this.#precio = precio;
    } else {
      alert("El precio debe ser mayor a 0.");
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
      alert("No hay suficiente stock. Solo quedan "+this.#stock+" unidades de "+this.#nombre);
    } else {
      this.#stock -= cantidad;
      alert("Venta realizada: "+cantidad+" unidades de "+this.#nombre+
        "\nStock restante: "+this.#stock);
    }
  }

  mostrarInfo() {
    alert("Producto: "+this.#nombre+
    "\nPrecio: $"+this.#precio+
    "\nStock: " +this.#stock +"unidades");
  }
}

const producto1 = new Producto("Teclado mecánico", 150, 8);
producto1.mostrarInfo();

producto1.vender(3);   // Venta correcta
producto1.vender(10);  // No hay suficiente stock
producto1.vender(-2);  // Cantidad inválida
producto1.setPrecio(-20); // Error de validación
producto1.mostrarInfo();
