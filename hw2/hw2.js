//1
let name = prompt('Укажите имя');
let age = prompt('Укажите возраст');
let city = prompt('Укажите город проживания');
let phone = prompt('Укажите номер телефона');
let email = prompt('Укажите электронную почту');
let company = prompt('Укажите компанию');

document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

//2
let date = new Date;
let year = date.getFullYear() - age;
document.write(` ${name} родился в ${year} году.`);

//3
let strNumbers = '123321';
let res = (Number(strNumbers[0]) + Number(strNumbers[1]) + Number(strNumbers[2])) - (Number(strNumbers[3]) + Number(strNumbers[4]) + Number(strNumbers[5]));

(res == 0) ? console.log('да') : console.log('нет');

//4
let a = -3;
(a > 0) ? console.log('Верно') : console.log('Неверно');

//5
a = 10;
let b = 2;

console.log(`сумма: ${a + b}`);
console.log(`разность: ${a - b}`);
console.log(`произведение: ${a * b}`);
console.log(`частное: ${a / b}`);

if ((a + b) > 1) {
    console.log(`квадрат: ${Math.pow((a + b), 2)}`);
}

//6
((a > 2 && a < 11) || (b >= 6 && b < 14)) ? console.log('Верно') : console.log('Неверно');

//7
let n = 55;

if (n < 0) {

} else if (n < 15) {
    console.log('Первая четверть');
} else if (n < 30) {
    console.log('Вторая четверть');
} else if (n < 45) {
    console.log('Третья четверть');
} else if (n < 60) {
    console.log('Четвертая четверть');
}

//8
let day = 25;

switch (true) {
    case day <= 0:
        break;
    case day <= 10:
        console.log('Первая декада');
        break;
    case day <= 20:
        console.log('Вторая декада');
        break;
    case day <= 31:
        console.log('Третья декада');
        break;
}

//9
let days = 6;
let yeas = days / 365;
let months = days / 31;
let weeks = days / 7;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

let result = '';

(Math.floor(yeas) == 0) ? result += 'Меньше года;' : result += `Количество лет: ${yeas};`;
(Math.floor(months) == 0) ? result += ' Меньше месяца;' : result += ` Количество месяцев: ${months};`;
(Math.floor(weeks) == 0) ? result += ' Меньше недели;' : result += ` Количество недель: ${weeks};`;

result += ` Количество часов: ${hours};`;
result += ` Количество минут: ${minutes};`;
result += ` Количество секунд: ${seconds};`;

console.log(result);

//10
day = 256;

switch (true) {
    case day <= 0:
        break;
    case day < 32:
        console.log('1-месяц зима');
        break;
    case day < 60:
        console.log('2-месяц зима');
        break;
    case day < 91:
        console.log('3-месяц весна');
        break;
    case day < 121:
        console.log('4-месяц весна');
        break;
    case day < 152:
        console.log('5-месяц весна');
        break;
    case day < 182:
        console.log('6-месяц лето');
        break;
    case day < 213:
        console.log('7-месяц лето');
        break;
    case day < 244:
        console.log('8-месяц лето');
        break;
    case day < 274:
        console.log('9-месяц осень');
        break;
    case day < 305:
        console.log('10-месяц осень');
        break;
    case day < 335:
        console.log('11-месяц осень');
        break;
    case day <= 365:
        console.log('12-месяц зима');
        break;
}