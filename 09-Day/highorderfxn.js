// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
console.log(cube(callback, 3))


// setting time

// setting interval using a setInterval function
function sayHello() {
  console.log('Hello')
}
// setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// setting a time using a setTimeout
// setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

