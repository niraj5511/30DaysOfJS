// Regular Expressions

// creating a pattern with RegExp constructor
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

// with flag
let flag = 'gi'
let regEx1 = new RegExp(pattern, flag)

// using RegExp object
let regEx2 = new RegExp('love','gi')


// creating pattern without RegExp constructor
let regEx3= /love/gi


// RegExp object methods

// testing for a match
const str = 'I love JavaScript'
const patterns = /love/
const result = patterns.test(str)
console.log(result) // true

// array containing all of the match
const result1 = str.match(pattern)
console.log(result1) // ['love', index: 2, input: 'I love JavaScript', groups: undefined]

const pattern1 = /love/g
const result2 = str.match(pattern1)
console.log(result2) // ['love']

// returning index of match
const pattern2 = /love/g
const result3 = str.search(pattern2)
console.log(result3) // 2

// replacing a substring
const txt = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language'
matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created. I recommend JavaScript for a first programming language
