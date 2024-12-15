// for loop
for(let i = 0; i <= 5; i++){
  console.log(i)  //  0 1 2 3 4 5
}

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
/*
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
*/

// adding elements of an array using for loop
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}
console.log(sum)  // 15

// creating a new array using existing using for loop
const number = [1, 2, 3, 4, 5]
const newArr = []
let sum1 = 0
for(let i = 0; i < number.length; i++){
  newArr.push( number[i] ** 2)

}
console.log(newArr)  // [1, 4, 9, 16, 25]


// while loop
let i = 0
while (i <= 5) {
  console.log(i)  //  0 1 2 3 4 5
  i++
}


// do while loop
let j = 0
do {
  console.log(j)  //  0 1 2 3 4 5
  j++
} while (j <= 5)


// for of loop
const numbe = [1, 2, 3, 4, 5]
for (const num of numbe) {
  console.log(num)  //  1 2 3 4 5
}

const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
for (const tech of webTechs) {
  console.log(tech.toUpperCase())  //  HTML CSS JAVASCRIPT REACT NODE MONGODB
}
for (const tech of webTechs) {
  console.log(tech[0]) //  get only the first letter of each element,  H C J R R N M
}


// break statement
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)  //  0 1 2
}


// continue statement
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)  //  0 1 2 4 5
}