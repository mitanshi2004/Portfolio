document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".intro-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".my-name", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".roles", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
  });


});
