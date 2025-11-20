const totalDivs = document.querySelectorAll("div").length;

const pTotal = document.createElement("p");
pTotal.textContent = `Total de <div>: ${totalDivs}`;

document.body.appendChild(pTotal);