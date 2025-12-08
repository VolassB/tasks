let title = '';
if (title != false) {
    console.log(`Задача: ${title}`)
}
else {
    console.log('Название задачи не указано')
}

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
    if (first > second) {
        return first;
    }

    else if (second > first) {
        return second;
    }

    else {
        return 'Eror';
    }
}

console.log(max(5, 10));

function printTask(title, status) {
    return `${title}: ${status}`;
}

console.log(printTask('Задача', true))

function isTaskDone(status) {
    return status === 'выполнена';
}

console.log(isTaskDone('выполнена'));