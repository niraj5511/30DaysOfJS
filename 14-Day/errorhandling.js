try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}

// use of name and message keys of object err 
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}

// use of throw 

/*
throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required
*/

const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()


// Error types

// ReferenceError
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName) // Uncaught ReferenceError: lastName is not defined at errorhandling.js:50:34

// SyntaxError
/*
let square = 2 x 2
console.log(square)
console.log('Hello, world') // Uncaught SyntaxError: Unexpected identifier 'x' (at errorhandling.js:55:16)
*/

// TypeError
let num = 10
console.log(num.toLowerCase()) // Uncaught TypeError: num.toLowerCase is not a functionat errorhandling.js:62:17