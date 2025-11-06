function saludo(nombre = "Amigo") {
    return "Hola, " + nombre + "!";
}

function mainSaludo() {
    const nombre = prompt("Ingrese su nombre (o deje vacío):");
    alert(saludo(nombre || undefined));
}