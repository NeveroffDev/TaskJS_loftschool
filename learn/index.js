const input = document.querySelector('#input');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');

addButton.addEventListener('click', (e) => {
    if (input.value !== '') {
        const item = document.createElement('li');
        item.classList.add('item');
        item.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.classList.add('btn', 'buttonDelete');
        deleteBtn.addEventListener('click', (e) => {
            taskList.removeChild(item);
        });

        item.appendChild(deleteBtn);
        taskList.appendChild(item);
        input.value = '';
    }
});