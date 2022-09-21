// let paragraf = document.getElementsByTagName('p')
// console.log(paragraf);

// let title = document.getElementsByTagName('h1')
// console.log(title);

// let intitle = document.getElementById('intitle')
// console.log(intitle);

// let h3 = document.getElementsByClassName('title')
// console.log(h3);
// let paragraf = document.querySelectorAll('p')
// console.log(paragraf);
// let h2 = document.querySelector('#intitle')
// console.log(h2);
// let title = document.querySelector('.title')
// console.log(title);

// let input = document.querySelector('input')
// console.log(input.value);

// let link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href' , 'https://ya.ru')
// link.textContent = 'yandex'
// title.innerText = 'it run'

// let div = document.querySelector('div')
// div.innerHTML = '<h2 style="color:red">academy</h2>'
// div.classList.add('blue')

// let block = document.querySelector('.block')
// block.style.width = '300px'
// block.style.height = '300px';
// block.style.backgroundColor = 'red'
let width = +prompt('width');
let height = +prompt('height');
let bg = prompt('background')
let div = document.querySelector('div')
div.style.width = `${width}px`
div.style.height = `${height}px`
div.style.backgroundColor = `${bg}`
