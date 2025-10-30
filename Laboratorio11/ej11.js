let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero) || numero < 0) {
    alert("Número inválido.");
} else {
    let texto = numero.toString();
    let n = texto.length;
    let suma = 0;

    for (let i = 0; i < n; i++) {
        let digito = parseInt(texto.charAt(i));
        suma += Math.pow(digito, n);
    }

    if (suma === numero) {
        alert(numero + " es un número Armstrong.");
    } else {
        alert(numero + " no es un número Armstrong.");
    }
}
