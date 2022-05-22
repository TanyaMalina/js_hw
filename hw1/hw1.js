//2
let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;

aArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18];
aArray.forEach(element => {
    console.log(element, typeof element);
})

//3
let width = 10;
let height =23;
let SPryam = width * height;
console.log(SPryam);

//4
height = 23;
let VCilindra = Math.PI * a7 * height;
console.log(VCilindra);

//5
let r = 5;
let SKruga = Math.PI * 2*r;
console.log(SKruga);

//6
let a = 5;
let b = 7;
let h = 10;
let STrap = (a + b)/2 * h;
console.log(STrap);

//7
let s = 2000000;
let p = 10;
let years = 5;
let Pereplata = years * 12 * (s * (p/100/12 * Math.pow(1+p/100/12, years*12)) / (Math.pow(1+p/100/12, years*12) - 1)) - s
console.log(Pereplata);

//7 Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a = 8;
b = 3;
let x;

//a+2(x-b)=16
x = (16-a+2*b)/2;
console.log(x);

//b(x+15)=a+6x
x = (a-15*b)/(b-6);
console.log(x);

//x+2x+ax+bx=23780
x = 23780/(3+a+b);
console.log(x);

