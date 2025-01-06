// Defining classes
class Vehicle {
  // code goes here
}
const vehicle = new Vehicle()
console.log(vehicle) // Vehicle {}


// class constructor
class People {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here i.e, People {}
    this.firstName = firstName
    this.lastName = lastName
  }
}
const people = new People()
console.log(people) // People {firstName: undefined, lastName: undefined}

class Animal {
  constructor(name, noOfLegs){
    this.name=name
    this.noOfLegs=noOfLegs
  }
}
const animal = new Animal('Dog',4)
console.log(animal) // Animal {name: 'Dog', noOfLegs: 4}


// creating multiple objects
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}
const person1 = new Person('Niraj', 'Bhusal')
const person2 = new Person('Shyam', 'Karki')
const person3 = new Person('Gita', 'Sharma')
console.log(person1)
console.log(person2)
console.log(person3)


// default values with constructor
class Student{
  constructor(name='Niraj', age=20){
    this.name=name
    this.age=age
  }
}
const student1 = new Student() // takes default value
const student2 = new Student('Ram',25)
console.log(student1) // Student {name: 'Niraj', age: 20}
console.log(student2) // Student {name: 'Ram', age: 25}



// class methods
class Country{
  constructor(firstTwoLetter,lastThreeLetter){
    this.firstTwoLetter=firstTwoLetter
    this.lastThreeLetter=lastThreeLetter
  }
  getCountryName(){
    const name = this.firstTwoLetter+this.lastThreeLetter
    return name
  }
}
const country1 = new Country("Ne",'pal')
const country2 = new Country('In','dia')
console.log(country1.getCountryName())
console.log(country2.getCountryName())


// getter
class Teacher{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  get getDetails(){
    return 'Name: '+this.name+' '+'Age: '+this.age
  }
}
const teacher = new Teacher('Gita',40)
console.log(teacher.getDetails) // paranthesis not required while calling getter methods


// setter
class Employee{
  constructor(name,age){
    this.name=name
    this.age=0
  }
  set setAge(age){
    this.age=age
  }
}
const employee = new Employee('Shyam')
console.log(employee.age) // 0
employee.setAge = 35
console.log(employee.age) // 35


// static method
class Time{
  constructor(timeZone){
    this.timeZone=timeZone
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}
console.log(Time.showDateTime())