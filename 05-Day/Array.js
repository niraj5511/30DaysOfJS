const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)
let firstNumber = numbers[0] // we are accessing the first item using its index
console.log(firstNumber) // 0

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// Concatenating array
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// Getting index of an element in an array
const num = [1, 2, 3, 4, 5]

console.log(num.indexOf(5)) // -> 4
console.log(num.indexOf(0)) // -> -1

// Checking items in a list
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// Checking existence of elements using includes()
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false

// Checking it it is an array
const nums = [1, 2, 3, 4, 5]
console.log(Array.isArray(nums)) // true

const number = 100
console.log(Array.isArray(number)) // false

// Converting array to string
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// Joining array elements
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// slice method in an array
const numbe = [1,2,3,4,5]

  console.log(numbe.slice()) // -> it copies all  item
  console.log(numbe.slice(0)) // -> it copies all  item
  console.log(numbe.slice(0, numbe.length)) // it copies all  item
  console.log(numbe.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


// splice method in an array
const numb = [1, 2, 3, 4, 5, 6]
    numb.splice(3, 3, 7, 8, 9)
  console.log(numb)  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


// Adding and removing element from the end
const nu = [1, 2, 3, 4, 5]
nu.push(6)
console.log(nu) // -> [1,2,3,4,5,6]
nu.pop() // -> remove one item from the end
console.log(nu) // -> [1,2,3,4,5]


// Adding and removing element from the beginning
nu.shift()
console.log(nu)  //  [2,3,4,5]
nu.unshift(1)
console.log(nu)  //  [1,2,3,4,5]

// Reversing the array order
nu.reverse()
console.log(nu)  //  [5,4,3,2,1]

// sorting elements in an array
const nam = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
nam.sort()
console.log(nam)  //  ['Asabeneh', 'Brook', 'Elias', 'Mathias']
nam.reverse()
console.log(nam)  //  ['Mathias', 'Elias', 'Brook', 'Asabeneh']


// Array of array
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]