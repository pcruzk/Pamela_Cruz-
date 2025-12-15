const id = prompt("Ingrese el ID del Pokémon:");

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => console.log("Nombre:", data.name))
  .catch(err => console.error("Error:", err));