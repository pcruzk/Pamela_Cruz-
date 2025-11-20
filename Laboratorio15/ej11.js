const ulNew = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    ulNew.appendChild(li);
}

const section = document.querySelector("section");
section.appendChild(ulNew);