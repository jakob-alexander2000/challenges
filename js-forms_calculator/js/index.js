console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const radios = document.getElementsByName("operator");


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  

  // --v-- write your code here --v--
  const numA = Number(event.target.elements.numberA.value);
  const numB = Number(event.target.elements.numberB.value);
  const formElements = event.target.elements;
  let result;

  // if (formElements.addition.value) {
  //   result = add(numA, numB);
  // }

  for (let i=0; i < radios.length; i++) {
    if (radio[i].checked) {
      console.log(radio[i]);
    }
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
