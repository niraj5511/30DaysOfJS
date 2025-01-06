class Company{
  constructor(name,address){
    this.name=name
    this.address=address
  }
  getCompanyDetails(){
    return this.name+" "+this.address
  }
}
class Department extends Company{
  getDepartmentDetails(){
    return 'Computer Department'
  }
}
const d1 = new Department('NCIT','Nepal')
console.log(d1.getCompanyDetails())
console.log(d1.getDepartmentDetails())


// overriding methods
class Human{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  showDetails(){
    return this.name+' '+this.age
  }
}
class Staff extends Human{
  constructor(name,age,gender){
    super(name,age)
    this.gender=gender
  }
  showDetails(){
    return super.showDetails()+' '+this.gender // if super.showDetails() is not called, it will return only gender
  }
}
const staff = new Staff('Niraj',20,'male')
console.log(staff.showDetails())