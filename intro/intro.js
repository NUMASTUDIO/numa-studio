
const video = document.getElementById("introVideo");
const skipButton = document.getElementById("skipIntro");

let redirected = false;

function enterWebsite() {
  if (redirected) return;
  redirected = true;

  window.location.replace("../index.html");
}

video.addEventListener("ended", enterWebsite);
skipButton.addEventListener("click", enterWebsite);

video.addEventListener("error", () => {
  skipButton.textContent = "Entrar a NUMA STUDIO →";
});

video.play().catch(() => {
  skipButton.textContent = "Reproducir intro";
  skipButton.onclick = () => {
    video.play();
  };
});

