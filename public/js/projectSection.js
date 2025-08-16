// GSAP scroll animation
gsap.registerPlugin(ScrollTrigger);

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

gsap.from(".side-slide-animation-4", {
  scrollTrigger: {
    trigger: ".side-slide-animation-4",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    markers: false,
  },
  x: -500,
  opacity: 0,
  duration: 2,
});

// Project view toggle (ML vs MERN)
const toggleBtn = document.querySelector(".p-view-remix");
const mernProjects = document.querySelector(".music-remix-details"); // MERN
const mlProjects = document.querySelector(".music-typebeat-details"); // ML

let showingML = false; // default = MERN visible

// pehle ML ko hide kar do
mlProjects.classList.add("hidden");
mernProjects.classList.remove("hidden");

toggleBtn.addEventListener("click", () => {
  if (showingML) {
    // Show MERN
    toggleBtn.innerText = "View ML Projects";
    mlProjects.classList.add("hidden");
    mernProjects.classList.remove("hidden");
  } else {
    // Show ML
    toggleBtn.innerText = "View MERN Projects";
    mlProjects.classList.remove("hidden");
    mernProjects.classList.add("hidden");
  }
  showingML = !showingML;
});


// Smooth scroll to project section
const projectSection = document.querySelector(".project-section");
const scrollTriggers = document.querySelectorAll(".span-add-fill, .go-to-project");
scrollTriggers.forEach((el) =>
  el.addEventListener("click", () =>
    projectSection.scrollIntoView({ behavior: "smooth" })
  )
);
