// Variables inJS 
// to define variable in JS we use 'var' or 'let' 
// 'const' is use to define constant variable
// constant variable are unchangeable

// example
var num= 12
let user_status = true

// to print data in console
console.log(num)
console.log(user_status)

// Note
// 1. var is use for global scope and let is use for block scope
// 2. variable define with var can be re-declared and update
// 3. variable defined with let can be updated but can't re-declared

// variable re-declaration
// note: variable cant' be access before it is define to whenever variable is
// re-defined it depends upon the scope it is beingn declared

let msg = "Hello World"
// let msg = "Hello Hello" Error: Cannot re-declare block scope 'msg'

function getMessage()
{
    console.log(function_msg) //cannot access before assigned
    console.log(function_msgOne)
    let function_msg = "Wow"
    var function_msgOne = "Variable va"
    console.log(function_msg)   

}

getMessage()
console.log(msg)
console.log(function_msg) // can't access outside the scope