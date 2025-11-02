const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

function toggleText(button) {
  const cardBody = button.closest(".card-body");
  const dots = cardBody.querySelector("#dots");
  const moreText = cardBody.querySelector("#more-text");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    button.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    button.textContent = "Read Less";
  }
}
