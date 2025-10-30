let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));
let total = 0;
let continuar;

if (isNaN(presupuesto) || presupuesto <= 0) {
    alert("Presupuesto inválido.");
} else {
    do {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
            alert("Precio inválido.");
        } else if (total + precio > presupuesto) {
            alert("No puede agregar este producto. Supera su presupuesto.");
            continuar = "n";
            break;
        } else {
            total += precio;
            alert("Producto agregado. Total actual: S/ " + total.toFixed(2));
        }
        continuar = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
    } while (continuar === "s");

    let mensaje = "Total parcial: S/ " + total.toFixed(2) + "\n";

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
}
