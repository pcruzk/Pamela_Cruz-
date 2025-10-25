let contador=parseInt(prompt("Ingrese cuantos números desea ingresar: "));

let positivos=0, negativos=0;

for(let i=1 ; i<=contador; i++){
    let num=parseInt(prompt("Ingrese el número "+i+":"));
    if(num<0){
        negativos++;
    }else{
        positivos++
    }
}
alert("Positivos: "+positivos+"\nNegativos: "+negativos);