class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    return "Nombre: " + this.nombre + "\nEmail: " + this.email;
  }
}

// Subclase Cliente
class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email);
    this.nivelFidelidad = nivelFidelidad;
  }

  mostrarInfo() {
    return (
      "Cliente:\n" +
      super.mostrarInfo() +
      "\nNivel de fidelidad: " + this.nivelFidelidad + " / 5"
    );
  }
}

// Subclase Administrador
class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos; 
  }

  mostrarInfo() {
    return (
      "Administrador:\n" +
      super.mostrarInfo() +
      "\nPermisos: " + this.permisos.join(", ")
    );
  }
}

const cliente1 = new Cliente("Ana Torres", "ana@mail.com", 4);
alert(cliente1.mostrarInfo());

const admin1 = new Administrador("Carlos Pérez", "carlos@mail.com", ["crear", "editar", "eliminar"]);
alert(admin1.mostrarInfo());