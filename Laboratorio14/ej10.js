let calificaciones = [12, 15, 18, 10, 20];

const normalizarCalificaciones = (notas) => {
    let max = Math.max(...notas);
    let normalizadas = [];
    for (let i = 0; i < notas.length; i++) {
        normalizadas.push((notas[i] / max).toFixed(2));
    }

    return normalizadas;
};

alert("Calificaciones: "+calificaciones.join(", ")+
    "\nCalificaciones normalizadas (0–1): " + normalizarCalificaciones(calificaciones).join(", "));