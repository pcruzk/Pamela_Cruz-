class Empleado {
  constructor(nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
  }

  mostrarInfo() {
    return "Empleado: " + this.nombre +
           "\nSueldo base: $" + this.sueldoBase.toFixed(2);
  }
}

// Subclase Programador
class Programador extends Empleado {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase);
    this.lenguaje = lenguaje;
  }

  calcularSueldo() {
    return this.sueldoBase * 1.10;
  }

  mostrarInfo() {
    return "Programador: " + this.nombre +
           "\nLenguaje: " + this.lenguaje +
           "\nSueldo total (10% bono): $" + this.calcularSueldo().toFixed(2);
  }
}

// Subclase ProgramadorSenior
class ProgramadorSenior extends Programador {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase, lenguaje);
  }

  calcularSueldo() {
    return this.sueldoBase * 1.25;
  }

  mostrarInfo() {
    return "Programador Senior: " + this.nombre +
           "\nLenguaje: " + this.lenguaje +
           "\nSueldo total (25% bono): $" + this.calcularSueldo().toFixed(2);
  }
}

const empleado1 = new Empleado("Lucía", 2000);
const programador1 = new Programador("Mario", 2500, "JavaScript");
const senior1 = new ProgramadorSenior("Carla", 3000, "Python");

alert(empleado1.mostrarInfo());
alert(programador1.mostrarInfo());
alert(senior1.mostrarInfo());