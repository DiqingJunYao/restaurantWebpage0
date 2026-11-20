const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#navigation");
function closeNavigation() {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
}
toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  toggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );
  navigation.classList.toggle("is-open", !isOpen);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeNavigation));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    const focusWasInNavigation = navigation.contains(document.activeElement);
    closeNavigation();
    if (focusWasInNavigation) toggle.focus();
  }
});
window.matchMedia("(max-width: 650px)").addEventListener("change", closeNavigation);
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-category]").forEach((dish) => {
      dish.hidden =
        button.dataset.filter !== "all" &&
        dish.dataset.category !== button.dataset.filter;
    });
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();

const photoDialog = document.querySelector("#dish-lightbox");
if (photoDialog) {
  const largePhoto = photoDialog.querySelector(".lightbox-image");
  const photoTitle = photoDialog.querySelector("#lightbox-title");
  const photoStatus = photoDialog.querySelector(".lightbox-status");
  let photoOpener;

  largePhoto.addEventListener("load", () => {
    largePhoto.hidden = false;
    photoStatus.hidden = true;
  });
  largePhoto.addEventListener("error", () => {
    largePhoto.hidden = true;
    photoStatus.textContent = "This photo could not be loaded. Please close it and try again.";
    photoStatus.hidden = false;
  });

  document.querySelectorAll(".dish-photo").forEach((button) => {
    button.addEventListener("click", () => {
      photoOpener = button;
      photoTitle.textContent = button.closest(".dish").querySelector("h3").textContent;
      largePhoto.alt = button.querySelector("img").alt;
      largePhoto.hidden = true;
      photoStatus.textContent = "Loading photo…";
      photoStatus.hidden = false;
      largePhoto.src = button.dataset.fullImage;
      photoDialog.showModal();
      document.documentElement.classList.add("lightbox-open");
    });
  });

  photoDialog.querySelector(".lightbox-close").addEventListener("click", () => photoDialog.close());
  photoDialog.addEventListener("click", (event) => {
    if (event.target !== photoDialog) return;
    const bounds = photoDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      photoDialog.close();
    }
  });
  photoDialog.addEventListener("close", () => {
    document.documentElement.classList.remove("lightbox-open");
    largePhoto.removeAttribute("src");
    largePhoto.hidden = true;
    photoOpener?.focus({ preventScroll: true });
  });
}
