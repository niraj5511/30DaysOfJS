// creating empty sets
const companies = new Set()
console.log(companies)


// creating sets from array
const languages = [
  'English',
  'Finnish',
  'French',
  'Spanish',
]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // Set(4) {'English', 'Finnish', 'French', 'Spanish'}


// adding elements to set
setOfLanguages.add('Nepali')
console.log(setOfLanguages) // {'English', 'Finnish', 'French', 'Spanish', 'Nepali'}


// deleting elements from set
setOfLanguages.delete('Finnish')
console.log(setOfLanguages) // {'English', 'French', 'Spanish', 'Nepali'}


// checking an element in the set
console.log(setOfLanguages.has('English')) // true
console.log(setOfLanguages.has('Japanese')) // false


// clearing the set
setOfLanguages.clear()
console.log(setOfLanguages)


// use case of Set to count unique items in array
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers) // Set(5) {5, 3, 2, 9, 4}


// union of two sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(A)
console.log(B)
console.log(C)


// intersection of two sets
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)

console.log(F) // Set(3) {3, 4, 5}


// difference of two sets
let g = d.filter((num) => !E.has(num))
let G = new Set(g)

console.log(G) // Set(2) {1, 2}