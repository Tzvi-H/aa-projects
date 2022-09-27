import { changeAboutMe, changeHeader, changeTitle } from "./manipulate.js";
import search from "./search.js";

window.onload = function () {
  changeTitle();
  changeHeader();
  changeAboutMe();
  console.log(search.findElementById("header")); // <div id="header">
  console.log(search.findFirstElementOfTag("LI")); // <li><h3>Computer Science</h3>...</li>
  console.log(search.findFirstElementOfClass("section")); // <div class="section"><h2>About Me</h2>...</div>
  console.log(search.findElementsOfTag("H3")); // [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3] (length: 11)
  console.log(search.findElementsOfClass("section")); // [div.section, div.section, div.section, div.section, div.section, div.section] (length: 6)
};
