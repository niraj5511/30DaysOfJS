// Level 1 Exercise
// Question 1

/*
let age = prompt("Enter your age: ")
if(age >= 18){
  console.log("You are old enough to drive")
} else{
  console.log(`You are left with ${18-age} years to drive`)
}
*/

// Question 2
let myAge = 20
let yourAge = prompt("Enter your age: ")
if(myAge == yourAge){
  console.log("We both are of same age")
} else if(yourAge > myAge){
  console.log(`You are ${yourAge-myAge} years older than me`)
} else{
  console.log(`I am ${myAge-yourAge} years older than you`)
}
