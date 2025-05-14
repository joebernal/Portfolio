document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded.");

  const skipLink = document.querySelector("a[href='#main-content']");
  if (skipLink) {
    skipLink.addEventListener("click", () => {
      const main = document.querySelector("#main-content");
      if (main) main.setAttribute("tabindex", "-1");
      main.focus();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
