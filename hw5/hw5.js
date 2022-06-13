//1
{
    let calculation = function (a, b, c) {
        return (a - b) / c;
    }

    console.log(calculation(13, 5, 2));
}

//2
{
    let calculation = function (num, exp) {
        return Math.pow(num, exp);
    }

    console.log(calculation(3, 3));
}

//
{
    let getMinMax = function (a, b, min) {
        return (min) ? 'Минимальное число: ' + Math.min(a, b) : 'Максимальное число: ' + Math.max(a, b);
    }

    console.log(getMinMax(3, 5, false));
}

//4
{
    function getArray(numFirst, numLast) {
        let arr = [];
        for (let i = numFirst; i <= numLast; i++) arr.push(i);
        return arr;
    }

    function showArray(arr) {
        for (let el of arr) console.log(el);
    }

    showArray(getArray(5, 10));
}

//5-6
{
    function isEven(num) {
        return num % 2 === 0;
    }

    console.log(isEven(6));

    function createArray(arr) {

        let evenArr = [];

        for (let el of arr) if (isEven(el)) evenArr.push(el);
        return evenArr;
    }

    console.log(createArray([4, 7, 52, 24, 1, 48]));
}

//7
{
    function drawPyramid(rows) {
        for (let i = 1; i <= rows; i++) console.log((arguments[1] === undefined || arguments[1] === ' ' || arguments[1] === '') ? String(i).repeat(i) : arguments[1].repeat(i));
    }

    drawPyramid(9, '$');
}

//8
{
    function drawTriangle(height) {

        let space = ' ';
        for (let i = height - 1, j = 1; i >= 0; i--, j += 2) {
            console.log(space.repeat(i) + '*'.repeat(j));
        }


    }

    drawTriangle(5);


    function drawReverseTriangle(height) {
        let space = ' ';

        for (let i = 0, j = 2 * height - 1; i < height; i++, j -= 2) {
            console.log(space.repeat(i) + '*'.repeat(j));
        }
    }

    drawReverseTriangle(3);
}

//9
{
    function createFibArray() {

        let fibArr = [0, 1];

        for (let i = 2; (fibArr[i - 1] + fibArr[i - 2]) <= 1000; i++) fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
        return fibArr;
    }

    console.log(createFibArray());
}

//10
{
    function calculationSum(num) {

        num = String(num);
        let sum = 0;

        for (let i = 0; i < num.length; i++) sum += +num[i];

        if (sum >= 10) {
            return calculationSum(sum);
        } else {
            return sum;
        }
    }

    console.log(calculationSum(99));
}

//11
{
    function printElementsArr(arr) {
        console.log(arr[i]);
        i++;
        if (i < arr.length) printElementsArr(arr);
    }

    let i = 0;
    printElementsArr([4, 7, 52, 24, 1, 48]);
}

//12
{
    function printInfoHomeWork(name, secondName, fatherName, numGroup) {

        let arrStr = [`Домашняя работа: «Функции»`, `Выполнил: студент гр. ${numGroup}`, `${secondName} ${name} ${fatherName}`];

        let maxLength = Math.max(Math.max(arrStr[0].length, arrStr[1].length), arrStr[2].length);

        console.log('*'.repeat(maxLength + 2));
        for (let el of arrStr) console.log('*' + el + ' '.repeat(maxLength - el.length) + '*');
        console.log('*'.repeat(maxLength + 2));
    }

    printInfoHomeWork('Иван', 'Иванов', 'Иванович', 'W4017');
}

