async function tipos(nombre) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  const data = await res.json();

  const tipos = data.types.map(t => t.type.name);
  console.log("Tipos:", tipos.join(", "));
}
tipos("charizard");