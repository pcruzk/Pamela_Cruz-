const form = document.getElementById("perfilForm");
const salida = document.getElementById("resultado");

const guardado = localStorage.getItem("perfil");

if (guardado) {
  const datos = JSON.parse(guardado);
  salida.textContent = 
    `Nombre: ${datos.nombre} - Edad: ${datos.edad} - País: ${datos.pais}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const perfil = {
    nombre: form.nombre.value,
    edad: form.edad.value,
    pais: form.pais.value
  };

  localStorage.setItem("perfil", JSON.stringify(perfil));

  salida.textContent = 
    `Nombre: ${perfil.nombre} - Edad: ${perfil.edad} - País: ${perfil.pais}`;
});