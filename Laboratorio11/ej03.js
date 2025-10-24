let suma = 0;
let notasValidas = 0;

for (let i = 1; i <= 5; i++) {
  let nota =prompt("Ingresa la nota "+ i +" (0-20):");

  if (nota >= 0 && nota <= 20) {
    suma += nota;
    notasValidas++;
  } else {
    alert("Nota inválida.");
    break;
  }
}

let promedio = suma / notasValidas;
alert("Promedio: "+promedio);