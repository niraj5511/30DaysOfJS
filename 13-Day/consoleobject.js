// console object methods

// console.log

// showing output on browser console
console.log('30 Days of JavaScript') // 30 Days of JavaScript

// substitution
console.log('%d %s of JavaScript',30,'Days') // 30 Days of JavaScript

// styling logging message using css
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow',
  ''
)


// console.warn()
console.warn('This is a warning') // This is a warning (in danger symbol)


// console.error()
console.error('This is an error message') // This is an error message (in cross symbol)


// console.table()
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

// for object
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)


// console.time()
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')

/* O/p at the instant

Finland Helsinki
Sweden Stockholm
Norway Oslo
Regular for loop: 0.5830078125 ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.447998046875 ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
forEach loop: 0.52392578125 ms

*/ 
// According the above output the regular for loop is slower than for of or forEach loop


// console.info()
console.info('30 Days Of JavaScript challenge is trending on Github') // 30 Days Of JavaScript challenge is trending on Github


// console.assert()
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4


// console.group()
const name1 = ['Niraj']
const name2 = ['Ram']
const name3 = ['Shyam']
console.group('All Names')
console.log(name1)
console.log(name2)
console.log(name3)
console.groupEnd()



// console.count()
const func = () => {
  console.count('Function has been called')
}
func()
func()
func()


// console.clear() to clean the browser
// console.clear() // console was cleared