

let expression = '';

function appendNumber(number) {
  expression += number;
  document.getElementById('display').value = expression;
}

function appendOperator(operator) {
  if (expression.length === 0) return;
  const lastChar = expression[expression.length - 1];
  if (isNaN(lastChar)) {
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}



