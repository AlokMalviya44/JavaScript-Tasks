const list = document.querySelector("#list");
const addItemInput = document.querySelector("#new-item");
const addBtn = document.querySelector("#add-btn");

var items = [];

addBtn.addEventListener("click", addNewItem);

function addNewItem() {
  const newItemText = addItemInput.value.trim();
  if (newItemText !== "") {
    items.push(newItemText);
    addItemInput.value = "";
    printList();
  }
}

function printList() {
  list.innerHTML = "";
  items.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeItem(index));
    listItem.appendChild(removeBtn);
    list.appendChild(listItem);
  });
}

function removeItem(index) {
  items.splice(index, 1);
  printList();
}

printList();
