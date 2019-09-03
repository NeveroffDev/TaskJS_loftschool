let input = document.createElement('input');
document.body.appendChild(input);

let button = document.createElement('button');
button.textContent = 'Click';
button.addEventListener('click', function (e) {
    console.log(input.value);
});
document.body.appendChild(button);