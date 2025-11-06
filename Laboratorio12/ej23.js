function potencia(base, exponente) {
    if (exponente === 0) return 1;
    return base * potencia(base, exponente - 1);
}

function mainPotencia() {
    const base = parseFloat(prompt("Ingrese la base:"));
    const exp = parseInt(prompt("Ingrese el exponente:"));
    alert("Resultado: " + potencia(base, exp));
}