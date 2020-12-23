let minusButton = document.getElementById("minus");
let number = document.getElementById("number");
let plusButton = document.getElementById("plus");


minusButton.textContent = "-";
number.textContent = "5";
plusButton.textContent = "+";


const minus = function minusOne(event) {
  let result = parseInt(number.textContent);
  result--;
  removeEventListener("click", minusOne);
  number.textContent = result;
  return result;
};

const plus = function plusOne(event) {
  let result = parseInt(number.textContent);
  result++;
  removeEventListener("click", plusOne);
  number.textContent = result;
  return result;
};

minusButton.addEventListener("click", minus);
plusButton.addEventListener("click", plus);
