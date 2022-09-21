
// function getFactorial(n){
//     if (n === 1) {
//         return 1
//     }else{
//         return n * getFactorial(n-1)
//     }
// }
// let result = getFactorial(4)
// console.log(result);

// function sayHi(){
//     alert('Hello')
// }
// setTimeout(sayHi , 5000)

// setTimeout(()=> alert('Привет'), 2000)

// let timerId = setTimeout(()=> alert('нечиго не происходит'),1000)
// clearTimeout(timerId)

// let timerID = setInterval(()=>alert('hello'),2000)
// setTimeout(()=> {clearTimeout(timerID); alert('stop')}, 5000)

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to){
//     let current = from
//     let timerId = setInterval(function(){
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId)
//         }
//         current++
//     }, 1000);

// }printNumbers(5, 10)

// 1.some()
// const myArray = ['a','b','c','d','e']
// console.log(myArray.some(test => test === 'd'));

// 2.reduce
// const myArray = [1,2,3,4,5]
// console.log(myArray.reduce((total , value)=> total * value));
// 1*2*3*4*5

// 3.every
// const myArray = ['a','b','c','d','e']
// console.log(myArray.every(test => test === 'd'));

// const myArray = ['a','a','a','a','a']
// console.log(myArray.every(test => test === 'a'));

// 4.map
// const myArray = [5,4,3,2,1]
// console.log(myArray.map(x => x * x));

// 5.flat
// const myArray = [[1,2] , [3,4],5]
// console.log(myArray.flat());

// 6.filter
// const myArray = [
//     {id:1 , name:'jhon'},
//     {id:2 , name:'Ali'},
//     {id:3 , name:'Mass'},
//     {id:4 , name:'Mass'}
// ]
// console.log(myArray.filter(element => element.name === 'Mass'));

// 7.forEach
// const myArray = [
//     {id:1 , name:'jhon'},
//     {id:2 , name:'Ali'},
//     {id:3 , name:'Mass'},
//     {id:4 , name:'Mass'}
// ]
// myArray.forEach(element =>console.log( element.name));

// Дан массив с числами. Создайте новый массив, 
// состоящий из квадратов этих чисел.
// let arr = [5,6,7,8,9]
// console.log(arr.map(x=> x* x));

// Дан массив с числами. Найдите сумму этих чисел.
// let arr = [5,6,7,8,9]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     count += arr[i]
// }
// console.log(count);

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля
// let arr = [5,6,7,8,9]

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
let arr = [5, 6, -7, 8, 9];