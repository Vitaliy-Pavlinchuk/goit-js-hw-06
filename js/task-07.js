
const onInput = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

onInput.addEventListener("input", onInputChange);

function  onInputChange  () {
spanText.style.fontSize =   onInput.value +  "px"  ;
};


