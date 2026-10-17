
const audio = document.getElementById("audioIntro");
const boton = document.getElementById("audioBtn");

let silenciado = false;

async function reproducirAudio() {
  if (silenciado) return;
  try {
    await audio.play();
  } catch (error) {
    // El navegador puede bloquear el audio automático.
  }
}

boton.addEventListener("click", async () => {
  silenciado = !silenciado;
  audio.muted = silenciado;
  boton.classList.toggle("silenciado", silenciado);
  boton.setAttribute("aria-label", silenciado ? "Activar sonido" : "Silenciar sonido");

  if (!silenciado && audio.paused) {
    await reproducirAudio();
  }
});

window.addEventListener("load", reproducirAudio, { once: true });

window.setTimeout(() => {
  document.body.classList.add("intro-terminado");
  window.location.href = "../index.html";
}, 7600);

