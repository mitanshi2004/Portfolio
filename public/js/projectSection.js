// GSAP scroll animation
gsap.registerPlugin(ScrollTrigger);

if (document.querySelector(".side-slide-animation-2")) {
  gsap.to(".side-slide-animation-2", {
    scrollTrigger: {
      trigger: ".side-slide-animation-2",
      toggleActions: "restart pause reverse pause",
      start: "20% 80%",
      end: "bottom 40%",
      scrub: true,
      markers: false,
    },
    x: 0,
    opacity: 1,
    duration: 4,
  });
}


// Project view toggle (ML vs MERN)
// Project view toggle (MERN ↔ ML)
const toggleBtn = document.querySelector(".p-view-remix");
const mernSection = document.querySelector(".music-projects");
const mlSection = document.querySelector(".ml-projects");

if (toggleBtn && mernSection && mlSection) {
  let showingML = false;

  toggleBtn.addEventListener("click", () => {
    if (!showingML) {
      // show ML projects
      mernSection.style.display = "none";
      mlSection.style.display = "block";
      toggleBtn.innerText = "View MERN Projects";
    } else {
      // show MERN projects
      mlSection.style.display = "none";
      mernSection.style.display = "block";
      toggleBtn.innerText = "View ML Projects";
    }
    showingML = !showingML;
  });
}

// Smooth scroll to project section
const projectSection = document.querySelector(".project-section");
if (projectSection) {
  const scrollTriggers = document.querySelectorAll(".span-add-fill, .go-to-project");
  scrollTriggers.forEach((el) =>
    el.addEventListener("click", () =>
      projectSection.scrollIntoView({ behavior: "smooth" })
    )
  );
}

