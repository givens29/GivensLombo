function toggleText() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more-text");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    button.textcontent = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    button.textcontent = "Read Less";
  }
}
