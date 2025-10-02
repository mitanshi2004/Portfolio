document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const toggleMenu = document.querySelector(".toggle-menu");
  const openMenu = document.querySelector(".open-menu");

  // Scroll links
  const goToAbout = document.querySelector(".go-to-about");
  const goToFaq = document.querySelector(".go-to-faq");
  const aboutSection = document.querySelector(".about-section");
  const faqSection = document.querySelector(".faq-section");

  // Menu-section links (optional)
  const aGoToAbout = document.querySelector(".go-to-a-section");
  const aGoToFaq = document.querySelector(".go-to-f-section");
  const aGoToProject = document.querySelector(".go-to-b-section");
  const aGoToHero = document.querySelector(".go-to-h-section");

  // --- Menu toggle ---
  if (openMenu && toggleMenu) {
    openMenu.addEventListener("click", () => {
      toggleMenu.classList.toggle("active");
    });
  }

  // --- Scroll to sections ---
  if (goToAbout && aboutSection) {
    goToAbout.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (goToFaq && faqSection) {
    goToFaq.addEventListener("click", () => {
      faqSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // --- Optional: close menu when clicking links ---
  function closeMenu() {
    if (toggleMenu) toggleMenu.classList.remove("active");
  }

  if (aGoToAbout) aGoToAbout.addEventListener("click", () => { closeMenu(); aboutSection?.scrollIntoView({ behavior: "smooth" }); });
  if (aGoToFaq) aGoToFaq.addEventListener("click", () => { closeMenu(); faqSection?.scrollIntoView({ behavior: "smooth" }); });
  if (aGoToProject) aGoToProject.addEventListener("click", () => { closeMenu(); document.querySelector(".project-section")?.scrollIntoView({ behavior: "smooth" }); });
  if (aGoToHero) aGoToHero.addEventListener("click", () => { closeMenu(); document.querySelector(".name-container")?.scrollIntoView({ behavior: "smooth" }); });
});
