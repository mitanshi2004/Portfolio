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
const toggleBtn = document.querySelector(".p-view-remix");
const mernProjects = document.querySelector(".music-remix-details");
const mlProjects = document.querySelector(".music-typebeat-details");

if (toggleBtn && mernProjects && mlProjects) {
  let showingML = false;

  mlProjects.classList.add("hidden");
  mernProjects.classList.remove("hidden");

  toggleBtn.addEventListener("click", () => {
    if (showingML) {
      toggleBtn.innerText = "View ML Projects";
      mlProjects.classList.add("hidden");
      mernProjects.classList.remove("hidden");
    } else {
      toggleBtn.innerText = "View MERN Projects";
      mlProjects.classList.remove("hidden");
      mernProjects.classList.add("hidden");
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
