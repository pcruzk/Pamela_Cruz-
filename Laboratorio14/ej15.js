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

// Lista de usuarios
const usuarios = [
  new Cliente("Ana Torres", "ana@gmail.com", 4),
  new Administrador("Carlos Pérez", "carlos@gmail.com", ["crear", "editar"]),
  new Cliente("Luis Ramos", "luis@gmail.com", 2),
  new Administrador("María Gómez", "maria@gmail.com", ["eliminar"]),
];

usuarios.forEach(usuario => {
  alert(usuario.mostrarInfo());
});