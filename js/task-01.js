const categoriesEl = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);

const items = document.querySelectorAll(".item");
Array.prototype.forEach.call(items, (element) => {
  const title = element.querySelector("h2").textContent;
  const itemsLength = element.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsLength}`);
});




