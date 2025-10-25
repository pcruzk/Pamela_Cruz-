let N=parseInt(prompt("Ingrese un número: "));
let primos= "";

for (let i=2; i<=N; i++){
    let esPrimo=true;

    for (let j=2; j<=Math.sqrt(i); j++){
        if (i%j===0){
            esPrimo=false;
            break;
        }
    }

    if (esPrimo){
        primos+=i+" ";
    }
}
alert("Números primos hasta "+ N +"\n"+primos);
