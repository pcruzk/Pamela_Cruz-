let monto = parseInt(prompt("Ingrese el monto a retirar:"));

if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Intente nuevamente.");
} else if (monto % 10 !== 0) {
    alert("El monto debe ser múltiplo de 10.");
} else {
    let billetes100 = Math.floor(monto / 100);
    monto = monto % 100;

    let billetes50 = Math.floor(monto / 50);
    monto = monto % 50;

    let billetes20 = Math.floor(monto / 20);
    monto = monto % 20;

    let billetes10 = Math.floor(monto / 10);

    alert(
        "Billetes entregados:\n" +
        "100: " + billetes100 + "\n" +
        "50 : " + billetes50 + "\n" +
        "20 : " + billetes20 + "\n" +
        "10 : " + billetes10
    );
}
