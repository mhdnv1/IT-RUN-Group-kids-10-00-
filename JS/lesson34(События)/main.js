let div = document.querySelector('div')
let prom = +prompt('введите значение')

if (prom >= 0 || prom < 0) {
      div.innerHTML = 'Это цифра'
}else{
    div.innerHTML = 'Это не цифра'
}
// let id = document.querySelector('#elem')

// id.onclick = function(){
//     alert('hello')
// }
// click
// contextmenu 
// mouseover 
// mousedown
// id.addEventListener('keydown', ()=>{
//     alert('hello')
//   } 
// )

// let input = document.querySelector('input')
// let btn = document.querySelector('button')

// btn.addEventListener('click' , ()=>{
//     input.style.color = 'red'
// })

let box = document.querySelector('.box');

box.addEventListener('click' , ()=>{
    if (  box.style.backgroundColor == 'red') {
        box.style.backgroundColor = 'white'
    }
    else{
        box.style.backgroundColor = 'red'
    }
})
