let opcion;

do {
    opcion = parseInt(prompt(
        "MENÚ DE ÁREAS\n" +
        "1. Calcular área del círculo\n" +
        "2. Calcular área del rectángulo\n" +
        "3. Salir"
    ));

    if (opcion === 1) {
        let radio = parseFloat(prompt("Ingrese el radio:"));
        if (isNaN(radio) || radio <= 0) {
            alert("Radio inválido.");
        } else {
            let area = Math.PI * radio * radio;
            alert("Área del círculo: " + area.toFixed(2));
        }

    } else if (opcion === 2) {
        let base = parseFloat(prompt("Ingrese la base:"));
        let altura = parseFloat(prompt("Ingrese la altura:"));
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            alert("Datos inválidos.");
        } else {
            let area = base * altura;
            alert("Área del rectángulo: " + area.toFixed(2));
        }

    } else if (opcion !== 3) {
        alert("Opción no válida.");
    }

} while (opcion !== 3);

alert("Programa finalizado.");
