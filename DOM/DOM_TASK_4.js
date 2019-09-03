let myDiv = document.createElement('div');
document.body.appendChild(myDiv);
myDiv.textContent = 'Этот элемент создан при помощи DOM API';

myDiv.addEventListener('click', function (e) {
    console.log('Этот текст говорит о том, что я всё сделал правильно');
});