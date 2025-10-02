document.addEventListener("DOMContentLoaded", function () {
  let iframes = document.querySelectorAll(".lazy-iframe");

  if (iframes.length === 0) {
  // No lazy iframes, silently exit
  return;
}


  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let iframe = entry.target;
          let src = iframe.getAttribute("data-src");

          if (!iframe.src) {
            iframe.src = src; // Assign real video URL
            console.log("Loaded:", src);
          }

          observer.unobserve(iframe); // Stop observing once loaded
        }
      });
    },
    { threshold: 0.5 }
  );

  iframes.forEach((iframe) => observer.observe(iframe));
});
