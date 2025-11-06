function mostrarDatos(nombre, edad, ...hobbies) {
    let mensaje = "Nombre: " + nombre + "\nEdad: " + edad + "\nHobbies: " + hobbies.join(", ");
    alert(mensaje);
}

function mainMostrarDatos() {
    const nombre = prompt("Ingrese su nombre:");
    const edad = prompt("Ingrese su edad:");
    const hobbies = prompt("Ingrese sus hobbies separados por comas:");
    mostrarDatos(nombre, edad, ...hobbies.split(","));
}