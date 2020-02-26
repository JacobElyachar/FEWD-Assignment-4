document.addEventListener("DOMContentLoaded", function() {
  let selectBackground;
  const backgroundSelect = document.querySelector(".bg-select");
  const backgroundImageContainer = document.querySelector(
    ".default-background-image "
  );

  backgroundSelect.addEventListener("change", function(event) {
    selectBackground = event.target.value;

    if (
      backgroundImageContainer.classList.contains(".default-background-image")
    ) {
      backgroundImageContainer.classList.remove(".default-background-image");
    }
    backgroundImageContainer.style.backgroundImage = `url("./images/${selectBackground}.jpg")`;
  });
});
