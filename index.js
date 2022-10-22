const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var previewCard = document.getElementById("preview-card");
  var thankYouCard = document.getElementById("thank-you-card");

  var currentPreviewCardDisplay = previewCard.style.display;

  if (currentPreviewCardDisplay == "block") {
    previewCard.style.display = "block";
    thankYouCard.style.display = "none";
  } else {
    previewCard.style.display = "none";
    thankYouCard.style.display = "flex";
  }
});

var currentRate = document.getElementById("rate");

var inputList = document.querySelectorAll("input");

inputList.forEach((selectedInput) => {
  selectedInput.addEventListener("click", () => {
    currentRate.innerHTML = selectedInput.value;
  });
});
