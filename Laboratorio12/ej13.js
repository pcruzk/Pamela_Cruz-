function procesarTexto(texto) {
    function limpiarEspacios(cadena) {
        return cadena.trim().replace(/\s+/g, " ");
    }

    function contarPalabras(cadena) {
        if (cadena.trim() === "") return 0;
        return cadena.split(/\s+/).length;
    }

    const textoLimpio = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(textoLimpio);

    alert("Texto limpio: " + textoLimpio);
    alert("Cantidad de palabras: " + cantidadPalabras);
}

const entrada = prompt("Ingrese un texto para procesar:");
procesarTexto(entrada);
