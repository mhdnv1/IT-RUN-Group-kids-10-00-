// for
// for in
// for of
// while
// do wile

// for([инициализация счетчика]; [условие]; [изменение счетчика]){
//     //действия
// }

// for(let i=0; i < 10; i+=2){
//     console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//    for (let j = 0; j <= 5; j++) {
//        console.log(i * j);
//    }
// }

// while (условие) {
//     //действия
// }

// let i = 1
// while (i <= 5) {
//     console.log(i);
//     i++
// }

// let i = 1
// do{
//     console.log(i);
//     i++
// }while (i <= 5)

// for (let i = 1; i < 10; i++) {
//     if (i == 6)
//         continue;
//         console.log(i);
    
// }
// 2 Найти сумму ряда чисел от 1 до 100. Полученный результат вывести на экран;
let count = 0
for (let i = 0; i < 100; i++) {
    count += i
    console.log(count);
}
// for (let i = 0; i < 497; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 5 Перемножить все нечётные значения в диапазоне от 0 до 9435;
// let count = 1
// for (let i = 0; i < 9435; i++) {
//     if (i % 2 !==0) {
//         count *= i
//         console.log(count);
//     }
// }

// 6 

// for (let i = 54; i < 9184; i++) {
//      if (i % 5 == 0) {
//          console.log(i);
//      }
// }

// 7 Даны два целых числа A и В. Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let a = +prompt('введите первое число')
// let b = +prompt('введите второе число')
// if (b > a) {
//     for (let i = a; i < b; i++) {
//         alert(i)
//     }
// }else if(b < a){
//     for (let i = a; i > b; i--) {
//         alert(i)
//     }
// }else if(a == b || b == a){
//     alert('равно')
// }
// else{
//     alert('не цифра')
// }