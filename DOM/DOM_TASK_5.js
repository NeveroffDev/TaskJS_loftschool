let myLink = document.createElement('a');
myLink.href = 'https://loftschool.com';
myLink.textContent = 'https://loftschool.com';
document.body.appendChild(myLink);


myLink.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(`Я кликнул на ссылку ${e.target.href}`);
});