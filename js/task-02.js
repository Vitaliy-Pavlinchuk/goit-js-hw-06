const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map((option) => {
  const navItemEl = document.createElement("li");
  navItemEl.textContent = option;
  navItemEl.classList.add("item");

  return navItemEl;
});

document.querySelector("#ingredients").append(...elements);




