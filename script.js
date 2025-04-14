function togglePost(header) {
    const preview = header.nextElementSibling;
    preview.style.display = preview.style.display === "block" ? "none" : "block";
  }
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });