function outerFunction() {
  let count = 0;
  function innerFunction() {
      count++
      return count
  }

  return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerFunction1() {
  let count = 0;
  function plusOne() {
      count++
      return count
  }
  function minusOne() {
      count--
      return count
  }
  return {
      plusOne:plusOne(),
      minusOne:minusOne()
  }
}
const innerFuncs = outerFunction1()
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)