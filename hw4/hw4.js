//1
{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

//2
{
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

    for (let el of arr) if (el > -10 && el < -3) console.log(el);
}

//3
{
    let arr = [];
    let i = 23;

    while (i <= 57) {
        arr.push(i);
        i++;
    }

    console.log(arr);

    let arr1 = [];
    let result = 0;

    for (let i = 23; i <= 57; i++) {
        arr1.push(i);
        result += i;
    }

    console.log(arr1);
    console.log(result);
}

//4
{
    let arr = ['10', '20', '30', '50', '235', '3000'];
    for (let el of arr) if (el[0] === '1' || el[0] === '2' || el[0] === '5') console.log(el);
}

//5
{
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for (let i = 0; i < arr.length; i++) document.write((i > 4) ? ' <b>' + arr[i] : ' ' + arr[i])
}

//6
{
    let arr = [5, 8, true, -89, 'text', false, -1];
    arr.push(0);
    let lastEl = arr[arr.length - 1];
    console.log(lastEl);
}

//7
{
    let arr = [];
    let num = prompt('Введите числа');

    while (num > 0 || num === 0) {
        arr.push(+num);
        num = prompt('Введите числа');
    }

    console.log(arr);
    console.log(arr.sort((a, b) => a - b));
}

//8
{
    let arr = [12, false, 'Текст', 4, 2, -5, 0];

    let i = 0;
    let revArr = [];

    while (i < arr.length) {
        revArr.unshift(arr[i]);
        i++;

    }

    console.log(revArr);
    console.log(arr.reverse());
}

//9
{
    let arr = [5, 9, 21, , , 9, 78, , , , 6];
    let count = 0;

    for (let el of arr) if (el === undefined) count += 1;
    console.log(count);
}

//10
{
    let arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
    let sum = 0;

    firstIndex = arr.indexOf(0);
    lastIndex = arr.lastIndexOf(0);

    for (let i = arr.indexOf(0); i < arr.lastIndexOf(0); i++) sum += arr[i];
    console.log(sum);
}

//11
{
    let height = prompt();
    let space = ' ';

    for (let i = height - 1, j = 1; i >= 0; i--, j += 2) {
        console.log(space.repeat(i) + '^'.repeat(j) + space.repeat(i));
    }
}

