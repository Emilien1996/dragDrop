const list_items = document.querySelector(".list-item");
const result = document.querySelector(".result");
const listContainer = document.querySelector(".list");
const selectOption = document.querySelector(".selectOption");
const button = document.querySelector(".btn");

let draggedItem = null;
const tagCreator = (value) => {
  if (value === "h1" || value === "input") {
    const newtag = document.createElement("input");
    newtag.draggable = true;
    listContainer.append(newtag);
    newtag.addEventListener("dragstart", (e) => {
      draggedItem = e.target;
      setTimeout(() => (e.target.style.display = "none"), 0);
    });
    newtag.addEventListener("dragend", () => {
      setTimeout(() => (draggedItem.style.display = "block"));
    });
  }
  if (value === "div") {
    const newtag = document.createElement("div");
    newtag.className = "list-item";
    newtag.draggable = true;
    newtag.textContent = "div";
    listContainer.append(newtag);
    newtag.addEventListener("dragstart", (e) => {
      draggedItem = e.target;
      setTimeout(() => (e.target.style.display = "none"), 0);
    });
    newtag.addEventListener("dragend", () => {
      setTimeout(() => (draggedItem.style.display = "block"));
    });
  }
};

result.addEventListener("dragover", (e) => e.preventDefault());
result.addEventListener("dragenter", (e) => e.preventDefault());
result.addEventListener("drop", (e) => {
  if (e.target.tagName === "INPUT") {
    alert("You cant do that");
  }
  e.target.append(draggedItem);
});

button.addEventListener("click", () => tagCreator(selectOption.value));
