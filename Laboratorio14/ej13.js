class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  area() {
    return 0;
  }

  perimetro() {
    return 0;
  }

  mostrarInfo() {
    alert("Figura: " + this.nombre +
      "\nÁrea: " + this.area().toFixed(2) +
      "\nPerímetro: " + this.perimetro().toFixed(2));
  }
}

// Subclase Cuadrado
class Cuadrado extends Figura {
  constructor(lado) {
    super("Cuadrado");
    this.lado = lado;
  }

  area() {
    return Math.pow(this.lado, 2);
  }

  perimetro() {
    return 4 * this.lado;
  }
}

// Subclase Triangulo
class Triangulo extends Figura {
  constructor(base, altura, lado1, lado2, lado3) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  area() {
    return (this.base * this.altura) / 2;
  }

  perimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

const cuadrado1 = new Cuadrado(5);
cuadrado1.mostrarInfo();

const triangulo1 = new Triangulo(6, 4, 5, 5, 6);
triangulo1.mostrarInfo();