let grados = parseFloat(prompt("Ingrese el ángulo en grados: "));

let radianes = parseFloat(((grados*Math.PI)/180).toFixed(2));

const gradosARadianes = (radianes) => {
    return radianes +" radianes\n"
    +(radianes/Math.PI).toFixed(0)+"π radianes";
}

const radianesAGrados = (radianes) => {
    return ((radianes*180/Math.PI)).toFixed(0)+" grados";
}

const senCos = (radianes) => {
    return "Seno: "+Math.sin(radianes).toFixed(2)
    +"\nCoseno: "+ Math.cos(radianes).toFixed(2);
}

alert (gradosARadianes(radianes)
+"\n"+radianesAGrados(radianes)
+"\n"+senCos(radianes));