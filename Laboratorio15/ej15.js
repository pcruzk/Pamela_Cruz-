const article = document.querySelector("article");
const clon = article.cloneNode(true);

document.querySelector("main").appendChild(clon);