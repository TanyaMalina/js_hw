//1
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}

i = 35;
while (i >= 8) {
    console.log(i);
    i--;
}

//2
i = 89;
let res = '';
while (i >= 11) {
    res += i + '</br>';
    i--;
}

document.write(res)

//3
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}

console.log(sum);

//4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).
sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) sum += j;

    console.log(sum);
}

//5
i = 8;
while (i <= 56) {
    if (i % 2 == 0) console.log(i);
    i++;
}

for (let i = 8; i <= 56; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
}

//6
res = 0;
for (let i = 2; i <= 10; i++) {
    res = 0;
    for (let j = 2; j <= 10; j++) console.log(`${i}*${j} = ${i * j}`);
}

//7
let n = 1000;
let num = 0;

while (n > 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

//8
let number;
num = 0;
sum = 0;

while (number != 0 && number != '') {
    number = prompt('Введите число');

    if (isNaN(number)) {
        alert('Ошибка ввода');
        break;
    }
    sum += Number(number);
    num++;
}

console.log('Общая сумма:' + sum);
console.log('Среднее арифметическое:' + sum / num);

//9
let strNum ='4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 368 57';
let maxNum;
let minNum;
let curNum = '';

for (let i = 0; i < strNum.length; i++) {

    if (i == strNum.length - 1) {
        curNum += strNum[i];
        (maxNum == undefined) ? maxNum = curNum : maxNum = Math.max(maxNum, curNum);
        (minNum == undefined) ? minNum = curNum : minNum = Math.min(minNum, curNum);
    } else if (strNum[i] != ' ') {
        curNum += strNum[i];
    } else {
        (maxNum == undefined) ? maxNum = curNum : maxNum = Math.max(maxNum, curNum);
        (minNum == undefined) ? minNum = curNum : minNum = Math.min(minNum, curNum);
        curNum = '';
    }
}

console.log(maxNum);
console.log(minNum);

//10
n = 123;
let strN = String(n);
num = 0;
sum = 0;

for (let i = 0; i < strN.length; i++) {
    console.log(strN[i]);
    num++;
    sum += Number(strN[i]);
}

console.log(num);
console.log(sum);

strNReverse = '';

for (let i = strN.length - 1; i >=0; i--) strNReverse += strN[i];
console.log(strNReverse);