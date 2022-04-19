
const onInput = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

onInput.addEventListener("input", onInputChange);

function  onInputChange  (event) {
spanText.style.fontSize = event.currentTarget.value + "px";
};


