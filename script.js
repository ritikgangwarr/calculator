function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  let result = document.getElementById('result').value;
  try {
    document.getElementById('result').value = eval(result);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteChar() {
  let result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}
