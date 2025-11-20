const lanzarDado = () =>{
    return (Math.round(Math.random()*6)+1);
}

let dado1 = lanzarDado();
let dado2 = lanzarDado();

alert ("Dado 1: "+dado1+"\nDado 2: "+dado2+
"\nSuma de dados: "+(dado1+dado2));