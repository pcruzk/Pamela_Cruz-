let a=parseInt(prompt("Ingrese el primer número: "));
let b=parseInt(prompt("Ingrese el segundo número: "));

function esMultiplo(a,b){
    if (a%b==0){
        alert (a+" es multiplo de "+b);
    }else{
        alert (a+" no es multiplo de "+b);
    }
}

esMultiplo(a,b);