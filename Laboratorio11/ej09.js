let N = parseInt(prompt("Ingrese el valor de N:"));
let suma = 0;

if (isNaN(N) || N < 1) {
    alert("Ingrese un número válido (mayor a 0).");
} else {
    for (let i = 1; i <= N; i++) {
        if (i % 5 !== 0) {
            suma += i;
        }
    }
    alert("La suma desde 1 hasta " + N + " (sin múltiplos de 5) es: " + suma);
}
