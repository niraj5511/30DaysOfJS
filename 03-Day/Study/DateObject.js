// Creating a time object
const now = new Date()
console.log(now)

// Getting full year
console.log(now.getFullYear())

// Getting month
console.log(now.getMonth())

// Getting date
console.log(now.getDate())

// Getting day of week
console.log(now.getDay())

// Getting hours
console.log(now.getHours())

// Getting minutes
console.log(now.getMinutes())

// Getting seconds
console.log(now.getSeconds())

// Getting time : number of seconds passsed from January 1, 1970
console.log(now.getTime()) 

const today = new Date()
const year = today.getFullYear() // return year
const month = today.getMonth() + 1 // return month(0 - 11)
const date = today.getDate() // return date (1 - 31)
const hours = today.getHours() // return number (0 - 23)
const minutes = today.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)