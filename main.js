let input = document.querySelector(".input");
let totalCharacters = document.querySelector(".total");
let remaingCharacters = document.querySelector(".remaining");
// let sp = input.split(0, input.length);

input.addEventListener("keyup", function () {
  updateCounter();
});

function updateCounter() {
  let count = (totalCharacters.innerHTML = input.value.length);
  remaingCharacters.innerHTML = input.getAttribute("maxlength") - count;
}
