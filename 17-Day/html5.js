// HTML5 Web Storage : sessionStorage and localStorage

// setting item to localStorage

// storing string
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage) // Storage {firstName: 'Asabeneh', length: 1}

// storing number
localStorage.setItem('age', 200)
console.log(localStorage) // Storage {firstName: 'Asabeneh', age: '200', length: 2}

// storing array
const skills = ['HTML', 'CSS']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage) // Storage {firstName: 'Asabeneh', age: '200', skills: '[\n    "HTML",\n    "CSS"\n]', length: 3}

// storing object
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)


// getting item from localStorage
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let userSkills = localStorage.getItem('skills')
console.log(firstName, age, userSkills) // Asabeneh 200 ["HTML","CSS"]
//JSON.parse() can be used to convert the string to original array


// clearing the localStorage
localStorage.clear()