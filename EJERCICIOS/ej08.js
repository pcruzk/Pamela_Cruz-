let aleatorio=Math.floor(Math.random()*10)+1;

let intento=parseInt(prompt("Adivine el número(entre el 1 y el 10): "));

while(intento!==aleatorio){
    intento=parseInt(prompt("Inténtalo de nuevo."));
}
alert("El número es correcto");