let N =parseInt(prompt("Ingrese un número entero: "));
factorial=1;

for (let i=1; i<=N;i++){
    factorial*=i;
}
alert ("Factorial de "+N+" es "+factorial);