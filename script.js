let title = '';
console.log(title != false ? `Задача: ${title}` : 'Название задачи не указано');

let tasks = 3;
if (tasks > 3) {
    console.log('Много задач')
}
else if (tasks <= 3) {
    console.log('Немного задач')
}
else if (tasks == 0) {
    console.log('Список пуст')
}
else {
    console.log('Список не может быть отрицательным, за вами едет ФСБ')
}

let isComplited = true;

console.log(isComplited ? 'Задача выполнена' : 'Задача ещё в работе');

function sum(first, second) {
    return `${first} + ${second} = ${first + second}`;
}

console.log(sum(5, 5));

function max(first, second) {
    return first > second ? first : second;
}

console.log(max(5, 10));

function printTask(title, status) {
    return `${title}: ${status}`;
}

console.log(printTask('Задача', true));

function isTaskDone(status) {
    return status === 'выполнена';
}

console.log(isTaskDone('выполнена'));

const numbers = [0, 1, 2, 3, 4];

console.log(numbers[0], numbers[numbers.length - 1]);

const country = ['Челябинск', 'Питер', 'Москва', 'Самара'];
console.log(country);
country[3] = 'Тюмень';
console.log(country);

const task = {
    id: 0,
    title: 'Задача',
    status: 'Выполнена',
};

alert(task.id);
alert(task.title);
alert(task.status);

const tasksM = ['Задача 1', 'Не выполнена','Задача 2', 'Выполнена'];
console.log(tasksM[0], tasksM[3]);