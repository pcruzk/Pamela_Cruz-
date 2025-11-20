const ulA = document.querySelector("ul");
const ultimoLi = ulA.lastElementChild;

ulA.insertBefore(ultimoLi, ulA.firstElementChild);