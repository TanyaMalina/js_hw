//1
{
    let str = 'aaa@bbb@ccc';
    console.log(str.replaceAll('@', '!'));
}

//2
{
    let date = '2025-12-31';

    let pot = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timeZoneName: undefined
    }

    let dateFormat = new Date('2025-12-31').toLocaleString('en-GB', pot);
    console.log(dateFormat);
}

//3
{
    let str = 'Я учу javascript!';

    console.log(str.substr(2, 3));
    console.log(str.substr(6, 10));

    console.log(str.substring(2, 5));
    console.log(str.substring(6, 16));

    console.log(str.slice(2, 5));
    console.log(str.slice(6, 16));
}

//4
{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for (let item of arr)  sum += Math.pow(item, 3);
    console.log(Math.sqrt(sum));
}

//5
{

    let a = 6;
    let b = 1;
    let c = Math.abs(a - b);
    console.log(c);
}

//6
{
    let date = new Date();

    let pot = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timeZoneName: undefined
    }
    console.log(date.toLocaleTimeString() + ' ' + date.toLocaleDateString());
}

//7
{
    let str = 'aa aba abba abbba abca abea';
    console.log(str.replace(/abb*a/gm, '!'));
}