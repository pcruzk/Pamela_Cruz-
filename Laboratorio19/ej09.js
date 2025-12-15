async function buscar() {
  const id = document.getElementById("pokeId").value;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  document.getElementById("resultado").innerHTML = `
    <h3>${data.name}</h3>
    <img src="${data.sprites.front_default}">
    <p>ID: ${data.id}</p>
    <p>Peso: ${data.weight}</p>
    <p>Altura: ${data.height}</p>
  `;
}