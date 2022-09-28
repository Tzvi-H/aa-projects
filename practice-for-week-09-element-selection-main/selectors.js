const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  const seeded = document.querySelectorAll(".seed");
  console.log(seeded);

  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.querySelectorAll(".seedless");
  console.log(seedless);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.querySelector(".seedless");
  console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const innerSpanWithTextYou = document.querySelector("#wrapper span");
  console.log(innerSpanWithTextYou);

  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapper = document.querySelector("#wrapper");
  console.log(wrapper.children);

  // 6. Get all odd number list items in the list
  // Your code here
  const oddListItems = document.querySelectorAll("li:nth-child(odd)");
  console.log(oddListItems);

  // 7. Get all even number list items in the list
  // Your code here
  const evenListItems = document.querySelectorAll("li:nth-child(even)");
  console.log(evenListItems);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const techCompanies = document.querySelectorAll("#three a");
  console.log([...techCompanies].filter((x) => x.className === ""));

  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.querySelector(".shopping");
  console.log(amazon);

  // 10. Get all unicorn list elements (not the image element)
  const unicorns = document.querySelectorAll(".unicorn");
  console.log([...unicorns].map((x) => x.parentElement));
};

window.onload = select;
