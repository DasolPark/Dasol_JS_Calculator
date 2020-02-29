const inputArea = document.querySelector('#inputArea');
const table = document.querySelector('table');

function onButtonClick(e) {
  if (e.target.innerText === '=') {
    inputArea.innerText = eval(inputArea.innerText);
  } else if (e.target.innerText === '%') {
    inputArea.innerText = parseInt(inputArea.innerText) / 100;
  } else if (e.target.innerText === 'AC') {
    inputArea.innerText = 0;
  } else {
    if (inputArea.innerText === '0') {
      inputArea.innerText = e.target.innerText;
    } else {
      inputArea.innerText = inputArea.innerText + e.target.innerText;
    }
  }
}

table.addEventListener('click', onButtonClick);
