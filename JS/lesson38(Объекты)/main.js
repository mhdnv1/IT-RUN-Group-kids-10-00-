// let user = new Object()


// let user = {
//     name : 'Tom',
//     age : 26
// };
// // user.name = 'Tom';
// // user.age = 26

// console.log(user.name);
// console.log(user.age);


// let name1 = 'Tom'
// let age = 26
// let user = {name1 , age}

// console.log(user.name1);
// console.log(user.age);


// let user = {}
// user.name = 'Tom'
// user.age = 26
// user.info = function(){
//     delete user.name
//     console.log(user.name);
//     console.log(user.age);
// }
// user.info()

// const p = {
//     name1 : 'tom'
// }
// p.name1 = 'bob'
// console.log(p.name1);

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name
// console.log(user.name);

// let country = {
//     name: 'Германия',
//     language:'немецкий',
//     capital:{
//         name : 'Берлин',
//         population: 337500,
//         yaer:1237
//     }
// }
// console.log(country.capital.name);

let users = {
    user1 : {name : 'Amantur' , age:14},
    user2 : {name : 'Emirbek' , age:15},
    user3 : {name : 'Shoha' , age:13},
    user4 : {name : 'Adilet' , age:12}
}


for(const key in users){
    console.log(users[key].age);
}