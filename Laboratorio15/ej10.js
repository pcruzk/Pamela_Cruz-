const h3 = document.createElement("h3");
h3.textContent = "Nuevo subtítulo";

const primerP = document.querySelector("p");
primerP.parentNode.insertBefore(h3, primerP);