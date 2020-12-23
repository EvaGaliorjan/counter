let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let number = document.getElementById("number");


plusButton.textContent = "+";
minusButton.textContent = "-";
number.textContent = "5";

const plus = function plusOne(event) {
  let result = parseInt(number.textContent);
  result++;
  removeEventListener("click", plusOne);
  number.textContent = result;
  return result;
};

const minus = function minusOne(event) {
  let result = parseInt(number.textContent);
  result--;
  removeEventListener("click", minusOne);
  number.textContent = result;
  return result;
};


plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
