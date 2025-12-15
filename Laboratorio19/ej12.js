async function stats(nombre) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  const data = await res.json();

  data.stats.forEach(s => {
    console.log(s.stat.name, ":", s.base_stat);
  });
}
stats("pikachu");