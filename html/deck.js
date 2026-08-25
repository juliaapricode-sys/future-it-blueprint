(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const progress = document.querySelector(".progress > span");
  const label = document.querySelector("[data-slide-label]");
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");
  const overview = document.querySelector("[data-overview]");
  const help = document.querySelector("[data-help]");
  const last = slides.length - 1;
  let index = 0;
  let touchX = null;

  function parseHash() {
    const n = Number.parseInt(location.hash.replace("#", ""), 10);
    return Number.isInteger(n) && n >= 0 && n <= last ? n : 0;
  }

  function render() {
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    const sceneImage = document.getElementById("scene-image");
    const scene = slides[index]?.dataset.scene;
    if (sceneImage && scene) sceneImage.src = scene;
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    label.textContent = `${String(index).padStart(2, "0")} / ${String(last).padStart(2, "0")}`;
    prev.disabled = index === 0;
    next.disabled = index === last;
    document.querySelectorAll("[data-jump]").forEach((btn) => {
      btn.setAttribute("aria-current", btn.dataset.jump === String(index) ? "true" : "false");
    });
  }

  function go(nextIndex) {
    index = Math.max(0, Math.min(last, nextIndex));
    const hash = `#${index}`;
    if (location.hash !== hash) location.hash = String(index);
    overview.classList.remove("is-open");
    render();
  }

  window.addEventListener("hashchange", () => {
    index = parseHash();
    render();
  });

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));
  document.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => go(Number(btn.dataset.jump)));
  });
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      overview.classList.remove("is-open");
      help.classList.remove("is-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (event.key === "?" || (event.shiftKey && event.key === "/")) {
      event.preventDefault();
      help.classList.toggle("is-open");
      return;
    }
    if (event.key === "Escape") {
      help.classList.remove("is-open");
      overview.classList.toggle("is-open");
      return;
    }
    if (event.key === "f" || event.key === "F") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      go(0);
    } else if (event.key === "End") {
      event.preventDefault();
      go(last);
    } else if (["ArrowRight", "PageDown", " ", "j"].includes(event.key)) {
      event.preventDefault();
      go(index + 1);
    } else if (["ArrowLeft", "PageUp", "k"].includes(event.key)) {
      event.preventDefault();
      go(index - 1);
    }
  });

  const stage = document.querySelector("main");
  stage.addEventListener("touchstart", (event) => {
    touchX = event.changedTouches[0]?.clientX ?? null;
  });
  stage.addEventListener("touchend", (event) => {
    if (touchX == null) return;
    const dx = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
    if (dx < -50) go(index + 1);
    if (dx > 50) go(index - 1);
    touchX = null;
  });

  index = parseHash();
  render();
})();
