// let num = 100
// console.log(num)

// const num1 = 200
// console.log(num1);


// let prom = prompt('')
// alert(prom)

// типы данныхы
// String
// Number
// Boolean
// undefined
// null
// let str = 'amantur'
// console.log(typeof(str));
// let n = 12
// console.log(typeof(n));
// let b = false
// console.log(typeof(b));
// let undef;
// console.log(undef);
// let prom = prompt('')
// alert(prom)

// let n = null
// console.log(n);
// 'use strict'

// a = 10
// console.log(a);

// let prom = +prompt('')
// console.log(typeof(prom));

// let str1 = 'hello'
// let str2 = 'world'
// console.log(str1 + ' ' + str2);

// console.log(1 + true); 
// console.log(1 + false);

// let res = 12 - 6 / 3
// console.log(res);

// let res2 = (3 + 4) * 2
// console.log(res2);
//console.log(2 ** 3); //2 * 2 * 2

// let x = 5
// x++
// console.log(x);

// let y = 5
// y--
// console.log(y);
// console.log(x + y);

// alert(2 == 3)
// alert(2 == "2")
// alert(2 === "2")
// console.log(2 != 2);
// console.log(3 !== "2");
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 2);
// console.log(2 >= 2);

// let a = 23
// a -=  10
// console.log(a);

// Пользователь вводит количество месяцев и лет. Вывести на экран количество дней 
// за это время. Считать, что в каждом месяце 29 дней;
let month = +prompt('введмте месяц ')
let year = +prompt('введмте year ')
let day = 29
let total = year * 12 + (month)
alert(total * day)