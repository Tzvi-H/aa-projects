export function changeTitle() {
  document.title = "manipulated title";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  document.querySelector("h1").innerText = "tzvi h";
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  document.querySelector("p").innerText =
    "this paragraph has been edited with javascript";
}
