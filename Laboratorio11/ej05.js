
let contadorpar=0, contadorimpar=0;

for (let i=1 ; i<=10 ; i++){
    let num=prompt("Ingrese el número " +i+ ": ");
    if ((num%2)==1){
        contadorimpar++;
    }else{
        contadorpar++;
    }
}
alert("Pares: " +contadorpar +"Impares: "+contadorimpar);