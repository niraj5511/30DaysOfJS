// spread operator to get rest of array elements
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [numb1, numb2, numb3, ...rests] = numbs
console.log(numb1, numb2, numb3)
console.log(rests)


// spread operators to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers) // (6) [0, 2, 4, 6, 8, 10]
console.log(oddNumbers) // (5) [1, 3, 5, 7, 9]
console.log(wholeNumbers) // (11) [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]


// spread operator to copy objects
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser) // {name: 'Asabeneh', title: 'Programmer', country: 'Finland', city: 'Helsinki'}

// modifying values while copying
const copiedUser1 = {...user, title:'instructor'}
console.log(copiedUser1) // {name: 'Asabeneh', title: 'instructor', country: 'Finland', city: 'Helsinki'}


// spread operator with arrow function
const allNums = (...args) => {
  console.log(args) // (5) [1, 2, 3, 4, 5]
}
allNums(1, 2, 3, 4, 5)

const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5)) // 15