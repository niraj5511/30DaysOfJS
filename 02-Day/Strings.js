// Concatenation of strings
let firstName = 'Niraj', lastName = 'Bhusal'
let fullName = firstName + lastName
console.log(name)

// Alternative way of concatenation
console.log("Niraj" + lastName)

// Template Strings
let c = 2, d = 3
console.log(`The sum of ${c} and ${d} is ${c+d}`) // The sum of 2 and 3 is 5

// finding length of string
let js = 'JavaScript'
console.log(js.length) //  10

// Changing string to uppercase
console.log(js.toUpperCase())  //  JAVASCRIPT

// Changing to lowercase
console.log(js.toLowerCase())  //  javascript

// Replacing old substring with new
console.log(js.replace("Java","Lava"))  //  LavaScript

// Returning repeated version of string
console.log(js.repeat(2))  // JavaScriptJavaScript

// Checking starting and ending of string
console.log(js.startsWith('J'))  //  true
console.log(js.startsWith('k'))  //  fasle
console.log(js.endsWith('t'))  //  true

// Returning the value at specific index
console.log(js.charAt(2))  //  v

// Printing substring
// console.log(js.substr(4,6))  //  Script
console.log(js.substring(4,10))  //  Script

// Concating string with substrings 
console.log(js.concat("Is good"))  //  JavaScriptIs good