// const input = document.querySelector('#validation-input')
// console.log(input);


// const inputRef = {
//   input: document.querySelector("#validation-input"),
// };



// const validLength = parseInt(inputRef.input.dataset.length);

// const validation = (event) => {
//   if (event.currentTarget.value.length === validLength) {
//     inputRef.input.className = "valid";
//   } else {
//     inputRef.input.className = "invalid";
//   }
// };

// inputRef.input.addEventListener("blur", validation);



// const inputRef = document.querySelector("#validation-input");
// console.dir(inputRef);

// inputRef.addEventListener("blur", onBlurcheckLength);

// function onBlurcheckLength(event) {
//   if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
//     inputRef.classList.remove("invalid");
//     inputRef.classList.add("valid");
//     return;
//   }
//   inputRef.classList.remove("valid");
//   inputRef.classList.add("invalid");
// }


// const inputEl = document.querySelector("input");

// inputEl.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length >= inputEl.dataset.length) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// });


const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const validLength = parseInt(inputRef.dataset.length);


inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === validLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});