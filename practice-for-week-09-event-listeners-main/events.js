window.addEventListener("DOMContentLoaded", (event) => {
  alert("DOMContentLoaded event fired");

  document
    .querySelector("#red-input")
    .addEventListener("input", changeInputColor);

  document.querySelector("#add-item").addEventListener("click", addItem);

  document
    .querySelector("#color-select")
    .addEventListener("input", changeColor);

  document
    .querySelector("#remove-listeners")
    .addEventListener("click", removeListeners);
});

const changeInputColor = ({ target }) => {
  if (target.value.toLowerCase() === "red") {
    target.classList.add("red-background");
  } else {
    target.classList.remove("red-background");
  }
};

const addItem = () => {
  const listItemInput = document.querySelector("#list-add");
  const newListItem = document.createElement("li");
  newListItem.textContent = listItemInput.value;
  document.querySelector("#section-2 ul").appendChild(newListItem);
  listItemInput.value = "";
};

const changeColor = ({ target }) => {
  document.querySelector("#section-3").style.backgroundColor = target.value;
};

const removeListeners = () => {
  document
    .querySelector("#red-input")
    .removeEventListener("input", changeInputColor);

  document.querySelector("#add-item").removeEventListener("click", addItem);

  document
    .querySelector("#color-select")
    .removeEventListener("input", changeColor);

  document
    .querySelector("#remove-listeners")
    .removeEventListener("click", removeListeners);
};
