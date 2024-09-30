function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10));
    }, 5000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  const randomGeneratorBtn = document.querySelector(".random-generator-btn");
  randomGeneratorBtn.addEventListener("click", () => {
    showLoading();
    getRandomNumber()
      .then(
        (randomNumber) => (h1.textContent = `Random Number: ${randomNumber}`)
      )
      .finally(() => hideLoading());
  });
});

function hideLoading() {
  const charginScreen = document.querySelector(".screen-loading");
  charginScreen.style.display = "none";
}
function showLoading() {
  const charginScreen = document.querySelector(".screen-loading");
  charginScreen.style.display = "flex";
}
