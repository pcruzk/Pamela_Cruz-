let opcion;

do {
    opcion = parseInt(prompt(
        "MENÚ PRINCIPAL\n" +
        "1. Calcular estadísticas de N notas\n" +
        "2. Contar pares e impares en un rango\n" +
        "3. Generar una tabla de multiplicar\n" +
        "4. Salir"
    ));

    if (opcion === 1) {
        let cantidad = parseInt(prompt("¿Cuántas notas ingresará?"));
        let notas = [];
        for (let i = 0; i < cantidad; i++) {
            let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
            notas.push(nota);
        }
        let suma = notas.reduce((a, b) => a + b, 0);
        let promedio = suma / cantidad;
        let max = Math.max(...notas);
        let min = Math.min(...notas);
        let encima = notas.filter(n => n > promedio).length;

        let pares = notas.filter(n => n % 2 === 0).length;
        let impares = cantidad - pares;

        alert(
            "Promedio: " + promedio.toFixed(2) +
            "\nMáximo: " + max +
            "\nMínimo: " + min +
            "\nPares: " + pares +
            "\nImpares: " + impares +
            "\nEncima del promedio: " + encima
        );

    } else if (opcion === 2) {
        let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
        let fin = parseInt(prompt("Ingrese el fin del rango:"));
        let pares = 0, impares = 0;
        for (let i = inicio; i <= fin; i++) {
            if (i % 2 === 0) pares++;
            else impares++;
        }
        alert("Pares: " + pares + "\nImpares: " + impares);

    } else if (opcion === 3) {
        let num = parseInt(prompt("Ingrese un número:"));
        let tabla = "Tabla del " + num + ":\n";
        for (let i = 1; i <= 12; i++) {
            tabla += num + " x " + i + " = " + (num * i) + "\n";
        }
        alert(tabla);

    } else if (opcion !== 4) {
        alert("Opción inválida.");
    }

} while (opcion !== 4);

alert("Programa finalizado.");
