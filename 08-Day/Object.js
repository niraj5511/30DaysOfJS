// Creating empty object
const animal = {}

// Creating object with values
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

// Getting values from an object
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

// accessing object methods
console.log(person.getFullName())  //  Asabeneh Yetayeh


// Setting new key for an object
const shape = {
  long : 20,
  wide : 30
}
console.log(shape) // {long: 20, wide: 30}
shape.area = 600
console.log(shape) // {long: 20, wide: 30, area: 600}


// Object Methods

// Object.assign to copy objects
const circle = {
  radius : 10
}
console.log(circle) // {radius: 10}

const copyCircle = Object.assign({},circle)
console.log(copyCircle) // {radius: 10}


// Object.keys to get object keys
const keys = Object.keys(copyCircle)
console.log(keys) // ['radius']


// Object.values to get object values
const values = Object.values(copyCircle)
console.log(values) // [10]


// Object.entries to get object keys and values
const entries = Object.entries(copyCircle)
console.log(entries) // ['radius', 10]


// hasOwnProperty to check existence of key in object
console.log(copyCircle.hasOwnProperty('radius'))  // true