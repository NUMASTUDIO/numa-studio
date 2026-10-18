
(() => {
  "use strict";

  const DURACION_INTRO = 5000;
  const intro = document.querySelector(".intro");

  if (!intro) return;

  // Evita redirecciones durante las pruebas locales.
  const parametros = new URLSearchParams(window.location.search);
  const modoPrueba = parametros.has("prueba");

  if (modoPrueba) return;

  // Transición suave antes de abrir la página principal.
  window.setTimeout(() => {
    intro.classList.add("intro-saliendo");

    window.setTimeout(() => {
      window.location.href = "../index.html";
    }, 900);
  }, DURACION_INTRO);
})();

