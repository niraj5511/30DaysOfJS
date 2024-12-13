// if statement
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

// if else statement
let num1 = 3
if (num1 > 0) {
  console.log(`${num1} is a positive number`)
} else {
  console.log(`${num1} is a negative number`)
}
//  3 is a positive number

num2 = -3
if (num2 > 0) {
  console.log(`${num2} is a positive number`)
} else {
  console.log(`${num2} is a negative number`)
}
//  -3 is a negative number

// if else if else statement
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
// 0 is zero

// switch case statement
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

// Ternary operators
let isTodayRaining = true
isTodayRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')