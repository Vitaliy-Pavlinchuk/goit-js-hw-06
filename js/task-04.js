const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtb = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0 

decrementBtn.addEventListener('click', decrement)
incrementBtb.addEventListener("click", increment);

function decrement() {
    counterValue -= 1
    changeValueEl(counterValue)
}

function increment() {
    counterValue += 1
    changeValueEl(counterValue);
}

function changeValueEl(number) {
    valueEl.textContent = number  
}
// ///2 варіант
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtb = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector("#value");


// const decremen = () => {
//   valueEl.textContent ++  
// }

// const increment = () => {
//     valueEl.textContent --;
// }

// decrementBtn.addEventListener("click", decremen);
// incrementBtb.addEventListener("click", increment);