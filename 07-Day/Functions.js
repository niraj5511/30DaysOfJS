// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}
square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}
addTwoNumbers() // a function has to be called by its name to be executed

// Function returning value
function printFullName (){
  let firstName = 'Niraj'
  let lastName = 'Bhusal'
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(printFullName())

// Function with parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}
console.log(areaOfCircle(10)) // should be called with one argument

// Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}
console.log(sumTwoNumbers(10, 20))

// Unlimited number of parameters in regular function
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15)) // 15

// Unlimited number of parameters in arrow function
const sumAllNum = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}
console.log(sumAllNum(1, 2, 3, 4)) // 10
console.log(sumAllNum(10, 20, 13, 40, 10))  // 93
console.log(sumAllNum(15, 20, 30, 25, 10, 33, 40))  // 173

// Anyonymous function
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
anonymousFun()

// Expression function
const cube = function(n) {
  return n * n * n
}
console.log(cube(2))


/*

// Self-Invoking function
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)
console.log(squaredNum)

*/

// Arrow Function
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// Function with default parameter
function greetings(name = 'Ram') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}
console.log(greetings())
console.log(greetings('Shyam'))