const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const reset = document.querySelector(".reset");
const num = document.querySelector(".num");

let defaultValue = 0;

increment.addEventListener("click", () => {
  defaultValue++;
  num.innerHTML = defaultValue;
});

decrement.addEventListener("click", () => {
  defaultValue--;
  num.innerHTML = defaultValue;
});

reset.addEventListener("click", () => {
  defaultValue = 0;
  num.innerHTML = defaultValue;
});
