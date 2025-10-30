let total = 0;
let continuar;

do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    if (!isNaN(precio) && precio > 0) {
        total += precio;
    } else {
        alert("Precio inválido.");
    }
    continuar = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
} while (continuar === "s");

let mensaje = "Total a pagar: S/ " + total.toFixed(2) + "\n";

if (total > 100) {
    mensaje += "Tiene un descuento del 10%.\n";
    total *= 0.9;
} else if (total >= 50) {
    mensaje += "Gana un cupón de 5%.\n";
    total *= 0.95;
} else {
    mensaje += "No aplica descuento.\n";
}

mensaje += "Total final: S/ " + total.toFixed(2);
alert(mensaje);
