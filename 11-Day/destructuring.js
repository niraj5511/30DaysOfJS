// Destructuring arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree) // 1 2 3

// skippint
// g value
let [numbOne, , numbThree] = numbers //2 is omitted
console.log(numbOne, numbThree) // 1 2

// using default value for undefined index
const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Asabeneh Brook David John

// using spread operator for larger arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3) // 1 2 3
console.log(rest) // (7) [4, 5, 6, 7, 8, 9, 10]


// destructuring array during iteration
const countries = ['Nepal', 'India', 'Japan']
for (const country of countries){
  console.log(country) // Nepal India Japan
}

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}


// destructuring object
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area } = rectangle
console.log(width, height, area) // 20 10 200


// renaming during structuring
const circle = { radius: 10, diameter: 20}
let {radius: r, diameter: d} = circle
console.log(r,d) // 10 20


// object parameter without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rect)) // 60


// object parameter with destructuring
const calcPerimeter = ({ width, height }) => {
  return 2 * (width + height)
}
console.log(calcPerimeter(rect)) // 60


// destructuring object during iteration
const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]
  
  for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
  }