// Control Statements 
// if Statement
let num1 = 12 
let num2 = 23 

if (num1 + num2 == 35) {
    console.log("Correct Answer")
    console.log("The result is: " +(num1 + num2))
}

if (num1 > num2) {
    console.log(num1+ " is greater than " +num2)
}

if (num1<num2) {
    console.log(num1+ " is smaller than " +num2)
}


// if else Statement
// define two variable country and country code 
// check if the value and type  of variable is same or not
// value -> "Nepal" for country and "NP" for code
// type -> String

let con = "Nepal"
let con_code = "NP"
let num_code = 977
let con_status = true

if(con === con_code){
    console.log("It is exact")
}else{
    console.log("Not exact")
}

if (con == "Nepal") {
    console.log("Value matched")   
}

// to check type of variable we can use typeof operator
console.log(typeof con)
console.log(typeof num_code)
console.log(typeof con_status) 

let password = "string"
console.log(typeof password)
if (typeof password !== String) {
    console.log("incorrect input")
}

// if else statement 
let collage_name = "dav"
let collage_location = "lalitpur"
if (collage_name == "dav" & collage_location == "lalitpur") {
    console.log("Correct information provided")
}else{
    console.log("Incorrect information")
}

let username = "mark"
let pin_code = 1234

if(username == "martin" | pin_code == 1234){
    console.log("username or pin is valid")
}else{
    console.log("Invalid credentials")
}

// if else if statement
let marks = 69
if (marks >= 0 & marks <= 39.99) {
    console.log("Fail")
}else if(marks >= 40 & marks<=60 ){
    console.log("Third distinction")
}else if( marks >=60 & marks <= 80){
    console.log("Second distinction")
}else if( marks >= 80 & marks <= 90){
    console.log("Firt division")
}else if( marks >= 90 & marks <= 100){
    console.log("Distinction")
}else if(marks > 100 | marks < 0){
    console.log("Please enter valid marks")
}


// nested if else statement 
let acc_no = "AC-001"
let pin = 5588 
let acc_type = "savings"

if (acc_no !== "AC-001") {
    console.log("Welcome to NIC Asia Bank")
    if (pin === 5588) {
        console.log("Have a nice day")
        if (acc_type === "savings") {
            console.log("Your account type is " +acc_type)
        }else{
            console.log("Please contact at bank for your account type")
        }
    }else{
        console.log("Invalid account number or pin code")
    }
}else{
    console.log("Account not available at the moment")
}

// swtich statement 
let day_num = 5
switch(day_num){
    case 1: 
        console.log("domingo")
        break
    case 2: 
        console.log("lunes")
        break
    case 3: 
        console.log("martes")
        break
    case 4: 
        console.log("miercoles")
        break
    case 5: 
        console.log("jueves")
        break
    case 6:     
        console.log("viernes")
        break
    case 7:
        console.log("sabado")
        break
    case 8: 
        console.log("No more days in the week")
        break
}