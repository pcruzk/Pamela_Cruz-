const contenedor = document.getElementById("resultado");

async function cargar() {
  for (let i = 1; i <= 10; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();

    contenedor.innerHTML += `
      <div>
        <h4>${data.name}</h4>
        <img src="${data.sprites.front_default}">
        <p>ID: ${data.id}</p>
      </div>
    `;
  }
}
cargar();