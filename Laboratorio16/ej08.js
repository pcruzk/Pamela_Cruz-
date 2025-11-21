document.getElementById("enviar").addEventListener("click", () => {
  let ok = true;

  const nom = document.getElementById("nombre").value.trim();
  const mail = document.getElementById("correo").value.trim();

  document.getElementById("errNom").textContent = "";
  document.getElementById("errMail").textContent = "";

  if (nom === "") {
    document.getElementById("errNom").textContent = "El nombre es obligatorio";
    ok = false;
  }

  if (mail === "") {
    document.getElementById("errMail").textContent = "El correo es obligatorio";
    ok = false;
  }

  if (ok) alert("Formulario válido");
});