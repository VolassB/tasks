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
if (isComplited) {
    console.log('Задача выполнена')
}
else {
    console.log('Задача ещё в работе')
}

function sum(a,b) {
    return `${a} + ${b}`;
}

console.log(sum(5, 5));