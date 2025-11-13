function gestionarEmpleados(empleados) {
  const resultado = {};

  empleados.forEach(e => {
    if (!resultado[e.area]) {
      resultado[e.area] = { empleados: [], totalSalario: 0 };
    }
    resultado[e.area].empleados.push(e.nombre);
    resultado[e.area].totalSalario += e.salario;
  });

  for (let area in resultado) {
    const data = resultado[area];
    data.promedio = data.totalSalario / data.empleados.length;
    delete data.totalSalario;
  }

  return resultado;
}

function main() {
  const lista = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
  ];

  const resultado = gestionarEmpleados(lista);
  alert("Gestión de empleados:\n" + JSON.stringify(resultado, null, 2));
}

main();
