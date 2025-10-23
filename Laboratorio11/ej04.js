
let edad = prompt("Ingrese su edad: ");

if (edad>=60){
    console.log("Adulto mayor");
}else if (edad>=18 && edad<=59){
    console.log("Adulto")
}else if(edad<=17 && edad>=12){
    console.log("Adolescente");
}else if(edad<12){
    console.log("Niño");
}