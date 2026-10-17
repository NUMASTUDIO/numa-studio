
const audio = document.getElementById("audioIntro");
const boton = document.getElementById("audioBtn");

let silenciado = false;

/* Intenta iniciar el sonido.
   Algunos navegadores requieren que el visitante interactúe primero. */
async function reproducirAudio() {
  if (!audio || silenciado) return;

  try {
    await audio.play();
  } catch (error) {
    // Si el navegador bloquea el inicio automático,
    // el visitante puede pulsar el botón de sonido.
  }
}

boton.addEventListener("click", async () => {
  silenciado = !silenciado;
  audio.muted = silenciado;

  boton.classList.toggle("silenciado", silenciado);
  boton.setAttribute("aria-pressed", String(silenciado));
  boton.setAttribute(
    "aria-label",
    silenciado ? "Activar sonido" : "Silenciar sonido"
  );

  if (!silenciado && audio.paused) {
    await reproducirAudio();
  }
});

window.addEventListener("load", () => {
  reproducirAudio();
});

/* La intro permanece visible 8 segundos y luego abre el inicio.
   Para probarla sin redirección, comenta las 3 líneas siguientes. */
window.setTimeout(() => {
  window.location.href = "../index.html";
}, 8000);
