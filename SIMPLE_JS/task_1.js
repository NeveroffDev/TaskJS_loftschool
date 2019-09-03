//TASK_01
var name = 'Anton';
console.log(name);
name = 'Alena';
console.log(name);

//TASK_02
let user = 'Anton';
if(user){
    console.log(`Привет, ${user}!`);
}else{
    console.log('Имя не заданно');
}

//TASK_03
for(let i = 0; i < 10; i++){
    console.log(i);
}

//TASK_04
function sum(p1, p2, p3) {
    let result = p1 + p2 + p3;
    return result;
}
let sumRusult = sum(10, 20,30);
console.log(sumRusult);

//TASK_05
let array = ['привет', 'loftschool'];
array.push(', я изучаю');
array.push('javascript');
console.log(array.length);
let resultStr = '';
for(let i in array){
    resultStr += array[i] + ' ';
}
console.log(resultStr);

//TASK_06
array100 = [10, 70, 111, 5, 234, 9, 700, 66, 500, 1000];
for(let i in array100){
    if(array100[i] > 100){
        console.log(array100[i]);
    }
}

//TASK_06
let userObj = {
    name: 'Anton',
    lastName: 'Neverov',
    age: 32
};
console.log(`${userObj.name} ${userObj.lastName}, ${userObj.age} лет`);
userObj.position = 'Developer';
console.log(`${userObj.name} ${userObj.lastName}, ${userObj.age} лет, занимаемая должность: ${userObj.position}`);

//TASK_07
function hello(human) {
    return `Привет, меня зовут ${human.name} ${human.lastName} и мне ${human.age} лет`;
}
let helloStr = hello(userObj);
console.log(helloStr);
