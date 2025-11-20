const lis = document.querySelectorAll("li");

lis.forEach(li => {
    li.classList.add("resaltado");
    li.classList.remove("oculto");
});