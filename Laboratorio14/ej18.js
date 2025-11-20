class Producto {
  constructor(nombre, precio, cantidad = 1) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularSubtotal() {
    return this.precio * this.cantidad;
  }

  mostrarInfo() {
    return (
      this.nombre +
      " (x" + this.cantidad + ") - $" + this.calcularSubtotal().toFixed(2)
    );
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    const existente = this.productos.find(p => p.nombre === producto.nombre);

    if (existente) {
      existente.cantidad += producto.cantidad;
      alert("Se actualizó la cantidad de " + producto.nombre);
    } else {
      this.productos.push(producto);
      alert("Se agregó " + producto.nombre + " al carrito.");
    }
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach(p => total += p.calcularSubtotal());
    return total;
  }

  mostrarResumen() {
    if (this.productos.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    let resumen = "=== RESUMEN DEL CARRITO ===\n";
    this.productos.forEach(p => {
      resumen += "- " + p.mostrarInfo() + "\n";
    });
    resumen += "\nTOTAL: $" + this.calcularTotal().toFixed(2);
    alert(resumen);
  }
}

const carrito = new Carrito();

const prod1 = new Producto("Teclado", 120, 1);
const prod2 = new Producto("Mouse", 60, 2);
const prod3 = new Producto("Monitor", 800, 1);

carrito.agregarProducto(prod1);
carrito.agregarProducto(prod2);
carrito.agregarProducto(prod3);
carrito.agregarProducto(new Producto("Mouse", 60, 1));

carrito.mostrarResumen();