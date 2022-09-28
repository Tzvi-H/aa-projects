/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    const breed = url.split("/")[4];

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here
    const image = new Image();
    image.src = url;
    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
    const ul = document.querySelector(".gallery ul");
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const figCaption = document.createElement("figcaption");
    figCaption.innerText = breed;
    figure.appendChild(image);
    figure.appendChild(figCaption);
    li.appendChild(figure);
    ul.appendChild(li);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  const firstDogListItem = document.querySelector(".gallery li");
  firstDogListItem.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  const lastDogListItem = document.querySelector(".gallery li:last-child");
  lastDogListItem.remove();
});
