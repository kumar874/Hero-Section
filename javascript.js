document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const content = document.querySelector(".content");
  const images = document.querySelectorAll(".image");

  // Initial Animation
  setTimeout(() => {
    hero.classList.add("show");
  }, 500);

  // Hover Interaction
  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      images.forEach((img) => {
        if (img !== image) {
          img.style.transform = "scale(0.5)";
          img.style.opacity = "0.2";
        }
      });
      image.classList.add("active");
    });

    image.addEventListener("mouseleave", () => {
      images.forEach((img) => {
        img.style.transform = "scale(1)";
        img.style.opacity = "0.5";
      });
      image.classList.remove("active");
    });

    // Mouse Movement Effect
    image.addEventListener("mousemove", (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const moveX = (x - midX) * 0.05;
      const moveY = (y - midY) * 0.05;

      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)";
    });
  });
});
