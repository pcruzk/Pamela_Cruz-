let pokemons = [];
let index = 0;

async function cargarTodos() {
  for (let i = 1; i <= 12; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokemons.push(await res.json());
  }
  mostrar();
}

function mostrar() {
  const div = document.getElementById("resultado");
  div.innerHTML = "";

  pokemons.slice(index, index + 3).forEach(p => {
    div.innerHTML += `
      <div>
        <img src="${p.sprites.front_default}">
        <p>${p.name} - ID ${p.id}</p>
      </div>
    `;
  });
}

function siguiente() {
  if (index < 9) index += 3;
  mostrar();
}

function anterior() {
  if (index > 0) index -= 3;
  mostrar();
}

cargarTodos();