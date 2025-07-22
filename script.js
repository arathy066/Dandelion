window.addEventListener("load", () => {
  const seed = document.querySelector(".dandelion-seed");

  gsap.set(seed, { opacity: 1 });

  gsap.to(seed, {
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top 80%",
    },
    duration: 3,
    x: 300,
    y: 400,
    ease: "power2.out",
    rotate: 30,
    onComplete: () => {
      gsap.to(seed, { opacity: 0, duration: 2 });
    }
  });
});