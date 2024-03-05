let inputField = document.querySelector('input');
let string = "";

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleClick(e) {
  const buttonText = e.target.innerHTML;

  if (buttonText === '=') {
    evaluateExpression();
  } else if (buttonText === 'C') {
    clearInput();
  } else {
    appendToInput(buttonText);
  }
}

function evaluateExpression() {
  string = eval(string);
  inputField.value = string;
}

function clearInput() {
  string = "";
  inputField.value = string;
}

function appendToInput(value) {
  string += value;
  inputField.value = string;
}
