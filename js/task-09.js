const button = document.querySelector(".change-color");
const btnSpan = document.querySelector(".color");

button.addEventListener("click", (event) => {
  event = getRandomHexColor();
  document.body.style.backgroundColor = event;
  btnSpan.textContent = event;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

