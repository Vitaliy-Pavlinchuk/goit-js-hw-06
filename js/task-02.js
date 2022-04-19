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
  navItemEl.style.listStyle = "none"

  return navItemEl;
});

document.querySelector("#ingredients").append(...elements);




