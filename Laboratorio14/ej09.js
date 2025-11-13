let x1 = parseInt(prompt("Ingrese X1 = "));
let y1 = parseInt(prompt("Ingrese Y1 = "));

let x2 = parseInt(prompt("Ingrese X2 = "));
let y2 = parseInt(prompt("Ingrese Y2 = "));

const calcularDistancia = (x1,y1,x2,y2) => {
    let distancia = Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
    return "Distancia entre puntos: "+distancia.toFixed(2);
}

const distanciaOrigen = (x, y) => {
    let dist = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    return dist;
}

let origen = distanciaOrigen(x1,y1)+distanciaOrigen(x2,y2);

alert (calcularDistancia(x1,y1,x2,y2)
+"\nSuma de distancias hasta el origen: "+origen.toFixed(2));