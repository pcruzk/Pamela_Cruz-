document.getElementById("lista").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});