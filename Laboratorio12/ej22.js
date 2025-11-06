function descargarArchivo(url, callback) {
    alert("Descargando...");
    setTimeout(() => {
        callback("Descarga completa de " + url);
    }, 2000);
}

function mainDescarga() {
    const url = prompt("Ingrese la URL del archivo:");
    descargarArchivo(url, mensaje => alert(mensaje));
}