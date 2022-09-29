window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#add").addEventListener("click", addItem);
});

const addItem = (event) => {
  event.preventDefault();

  const listItem = document.createElement("li");
  listItem.textContent = document.querySelector("#name").value;
  listItem.dataset.type = document.querySelector("#type").value;
  document.querySelector("#name").value = "";
  document.querySelector("#shopping-list").appendChild(listItem);
};
