// function имя_функции(параметр){
//     // инструкции
// }
// function hello(){
//     console.log('hello world');
// }
// hello()
// hello()
// hello()

// let message = function(){
//     console.log('hello world');
// }
// message()


// function hello(message){
//     console.log(message);
// }
// hello('hello JS')
// hello('IT RUN')
// hello('Function in JS')
// hello()

// function sum(a = 8 , b=5){
//     const result = a + b
//     console.log(result);
// }
// sum(14 , 1)

// function sum(a, b){
//    return a + b
// }
// console.log(sum(2,2));

// let a = 10
// function sum(){
//     const b = a + 20
//     return b
    
// }
// console.log(sum());
// console.log(b);


// const sum = (a , b)=> {
//    return a + b
// }
// console.log(sum(2,2));

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// function min(a , b){
//     if(a < b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(min(5,2));
// console.log(min(7,8));

// const min = (a , b)=>{
//     if(a < b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(min(3,2));

// let min = function(a,b){
//     if(a < b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(min(2,1));

// 1)Создать функцию calc(a, b, operation). Описание входных параметров:
// Первое число
// Второе число
// Действие над ними:
//    1) + Сложить
//    2) - Вычесть
//    3) * Умножить
//    4) / Разделить
//    Сделайте момент где если пользователь делит число на 0, нужно вывести “На    ноль делить нельзя”
//    5) В остальных случаях функция должна возвращать "Операция не поддерживается"


function calc(a , b , operation){
       if(operation == '+'){
           return a + b
       }else if(operation == '-'){
           return a - b
       }else if(operation == '*'){
           return a * b
       }else if(a == 0 || b == 0 && operation == '/'){
           return 'На  ноль делить нельзя'
       }
       else if(operation == '/'){
           return a / b
       }
}
console.log(calc(2 , 3, '+'));
console.log(calc(2 , 3, '-'));
console.log(calc(2 , 3, '*'));
console.log(calc(2 , 0, '/'));


// Создайте функцию countChars, которая считает количество символов в строке. Она должна принимать два аргумента:
// символ, который надо найти и строку, в которой искать. Функция должна возвращать целое число - количество найденных
// символов (или ноль, если символ не найден). Под символом будем понимать строку, содержащую из одного символа.
// countChars('b', 'bbbbb');
// let count = 0
function countChars(str , strs) {
    for(let i = 0 ; i < strs.length; i++){
        if(str == strs[i]){
            count += 1
        }
    }
    console.log(count);
}
countChars('i' , "fahriiiiiiiiidin")



// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1