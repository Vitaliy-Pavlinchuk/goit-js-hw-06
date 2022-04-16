


const button = document.querySelector(".change-color");
const btnSpan = document.querySelector(".color");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  btnSpan.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const btn = document.querySelector(".change-color");
// const hexText = document.querySelector(".color");

// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   hexText.textContent = getRandomHexColor();
// });
