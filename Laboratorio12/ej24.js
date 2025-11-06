function crearSecuencia(inicio, paso) {
    let actual = inicio;
    return () => {
        const valor = actual;
        actual += paso;
        return valor;
    };
}

function mainSecuencia() {
    const inicio = parseFloat(prompt("Ingrese el inicio de la secuencia:"));
    const paso = parseFloat(prompt("Ingrese el paso:"));
    const secuencia = crearSecuencia(inicio, paso);

    alert("Valores: " + [secuencia(), secuencia(), secuencia(), secuencia()].join(", "));
}