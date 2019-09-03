let myDiv = document.createElement('div');
myDiv.textContent = 'Этот элемент создан при помощи DOM API';


let myDivInner = document.createElement('div');
myDivInner.classList.add('inner');
myDivInner.textContent = 'Этот элемент тоже создан при помощи DOM API';
myDiv.appendChild(myDivInner);

document.body.appendChild(myDiv);