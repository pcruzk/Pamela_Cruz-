document.querySelectorAll(".mini").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("grande").src = img.src;
  });
});