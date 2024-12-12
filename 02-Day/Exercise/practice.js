// Level1 Exercise
let challenge = '30 Days Of JavaScript'  //  1
console.log(challenge)  // 2
console.log(challenge.length)  //  3
console.log(challenge.toUpperCase())  //  4
console.log(challenge.toLowerCase())  //  5
console.log(challenge.substring(0,2))  //  6
console.log(challenge.substring(0,7))  //  7
console.log(challenge.includes("Script"))  //  8
console.log(challenge.split())  //  9
console.log(challenge.split(""))  //  10

let string="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(string.split(","))  //  11

console.log(challenge.replace("JavaScript","Python"))  //  12
console.log(challenge.charAt(15))  //  13
console.log(challenge.charCodeAt(11))  //  14
console.log(challenge.indexOf('a'))  //  15
console.log(challenge.lastIndexOf('a'))  //  16

let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"))  //  17
console.log(sentence.lastIndexOf("because"))  //  18
console.log(sentence.search('because'))  //  19

console.log(challenge.trim())  //  20
console.log(challenge.startsWith("30"))  // 21
console.log(challenge.endsWith("JavaScript"))  // 22
console.log(challenge.match('a'))  //  23

let firstString = "30 Days Of"
let secondString = "JavaScript"
console.log(firstString.concat(secondString))  //  24

console.log(challenge.repeat(2))  //  25