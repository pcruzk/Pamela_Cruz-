async function mostrarStats(nombre) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  const data = await res.json();

  let html = "<ul>";
  data.stats.forEach(s => {
    html += `<li>${s.stat.name}: ${s.base_stat}</li>`;
  });
  html += "</ul>";

  document.body.innerHTML += html;
}
mostrarStats("bulbasaur");