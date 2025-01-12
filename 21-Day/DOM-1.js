// DOM(Document Object Model)-Day1

// getting elements
// getting elements by tag name

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles); //HTMLCollections

// getting elements by class name

const allTitles1 = document.getElementsByClassName('title')
console.log(allTitles1)

// getting elements by id

let firstTitle = document.getElementById("first-title")
console.log(firstTitle) // <h1>First Title</h1>

// getting elements by using querySelector methods

let firstTitle1 = document.querySelector('h1') // select the first available h1 element
let firstTitle2 = document.querySelector('#first-title') // select id with first-title
let firstTitle3 = document.querySelector('.title') // select the first available element with class title

const allTitles2 = document.querySelectorAll('h1') // selects all the available h1 elements in the page


// adding attributes
// adding attributes using setAttribute

// const titles = document.querySelectorAll('h1')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')

// adding attributes without using setAttribute

// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// adding class using classList

//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')

// removing class using remove

// titles[3].classList.remove('title', 'header-title')


// adding text content using textContent

// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'


// adding style

// adding style color and font size

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.color = 'green'
//   } else {
//     title.style.color = 'red'
//   }
// })

// adding style background color

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.backgroundColor = 'green'
//   } else {
//     title.style.backgroundColor = 'red'
//   }
// })