// meta characters

// square bracket ([])
const pattern4 = /[Aa]pple/g // this square bracket means either A or a
const txt1 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt1.match(pattern4)
console.log(matches) // (2) ['Apple', 'apple']

// escape character (\)
const pattern5= /\d/g  // d is a special character which means digits
const txt2 = 'This regular expression example was made in January 12,  2020.'
const matches1 = txt2. match(pattern5)
console.log(matches1)  // ["1", "2", "2", "0", "2", "0"]

// one or more times (+)
const pattern6 = /\d+/g  // d is a special character which means digits
const txt3 = 'This regular expression example was made in January 12,  2020.'
const matches2 = txt3. match(pattern6)
console.log(matches2)  // ["12", "2020"]

// period (.)
const pattern7 = /[a]./g  // this square bracket means a and . means any character except new line
const txt4 = 'Apple and banana are fruits'
const matches3 = txt4.match(pattern7)
console.log(matches3)  // ["an", "an", "an", "a ", "ar"]

// zero or many times (*)
const pattern8 = /[a].*/g  //. any character, * any character zero or more times 
const txt5 = 'Apple and banana are fruits'
const matches4 = txt5.match(pattern8)
console.log(matches4) // ['and banana are fruits']                 

// zero or one times (?)
const txt6 = 'I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.'
const pattern9 = /[Ee]-?mail/g  // ? means optional
matches5 = txt6.match(pattern9)
console.log(matches5)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifiers

// /\\b\w{4}\b/g  //  exactly four character words

// /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers

// /\d{4}/g  // a number and exactly four digits

// /\d{1,4}/g   // 1 to 4


// Cart (^)

// /^This/ // ^ means starts with

// /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period


// Exact match
let pattern10 = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result4 = pattern10.test(name)
console.log(result4) // true