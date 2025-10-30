let precio=parseInt(prompt("Ingrese el precio del producto: "));
let porcentaje=parseInt(prompt("Ingrese el porcentaje de descuento: "));

const calcularDescuento = function(precio,porcentaje){
    return "El precio final es de "+precio*((100-porcentaje)/100);
}

alert(calcularDescuento(precio,porcentaje));