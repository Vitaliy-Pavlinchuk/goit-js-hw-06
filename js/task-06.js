const inputRef = document.querySelector("#validation-input");

function onblur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid')
    inputRef.classList.remove("invalid");
  }
  else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener('blur', onblur)







//////   2 ваіант
// const inputRef = document.querySelector("#validation-input");

// function onBlur(event) {
//   event.currentTarget.value.length === Number(inputRef.dataset.length)
//     ? inputRef.setAttribute("class", "valid")
//     : inputRef.setAttribute("class", "invalid");
//  }

// inputRef.addEventListener("blur" , onBlur)







