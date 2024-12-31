// forEach
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


// map
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)


// filter
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)


// reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)


// every
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 
console.log(areAllTrue) // true

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr) // true


// find
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age > 20)
console.log(age) // 24


// findIndex
const result = ages.findIndex((age) => age > 20)
console.log(result) // 0


// some
const bool = [true, false, false, true]
const areSomeTrue = bool.some((b) =>  b === true)
console.log(areSomeTrue)


// sort

// sorting string values
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products) // ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
console.log(products)

// sorting numeric values
const nums = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(nums.sort()) //[100, 3.14, 37, 9.81]

// using compare callback fxn inside sort
nums.sort(function (a, b) {
  return a - b
})
console.log(nums) // [3.14, 9.81, 37, 100]

nums.sort(function (a, b) {
  return b - a
})
console.log(nums) //[100, 37, 9.81, 3.14]

// sorting object arrays
const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending