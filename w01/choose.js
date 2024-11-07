import choices from "./choice.mjs";

console.log(choices);

function storyTemplate(story) {
    return `
        <h2> title: ${story.title} </h2>
        `;
  } 

function stepTemplete(step){
  return `
  <section class="story">
        <p>
          ${step.text}
        </p>
        <button id=${step.choices[0].go_to}>${step.choices}</button>
        <button id=${step.choices[0].go_to}>${step.choices2}</button>
        <button id=${step.choices[0].go_to}>${step.choices3}</button>
  </section>`;
}

function renderStory(story) {
  const listElement = document.querySelector("main");
  listElement.innerHTML = storyTemplate(story);
  listElement.innerHTML = stepTemplete(step.start);
  
}
renderStory(choices);

