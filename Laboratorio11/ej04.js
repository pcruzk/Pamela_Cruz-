
let edad = parseInt(prompt("Ingrese su edad: "));

if (edad>=60){
    alert("Adulto mayor");
}else if (edad>=18 && edad<=59){
    alert("Adulto")
}else if(edad<=17 && edad>=12){
    alert("Adolescente");
}else if(edad<12){
    alert("Niño");
}