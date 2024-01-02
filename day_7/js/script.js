// basic function 

// Rule: 
// 1. Must invoke in order to execute the code inside function
// 2. Follow naming convention to define name 

// Type of user define function
// 1. withut parameter and return type 

// Defining function
function showMessage() {
    let message = "Have a nice day!"
    console.log("Message: "+message)
}

// invoking function
showMessage()

// 2. with parameter and no-return type
function checkuserType(userType,department) {
    let user_type = "ADMIN"
    let user_department = "HEADQUATERS"
    if (user_type === userType.toUpperCase() && user_department === department.toUpperCase()) {
        console.log("WELCOME TO DAV ADMIN PANEL")
    }else{
        console.log("Message: Access Forbidden")
    }
    
}

// passing arguments to function with parameter
let ut = "admin"
let dept = "headquaters"
checkuserType(ut,dept)

// 3. with parameter and return type
function checkResult(check_value) {
    let result = "";
    switch (check_value) {
        case 1:
            return result.concat(result, "You're under average")
            break;
        case 2: 
            return result.concat(result, "You're average")
            break;
        case 3:
            return result.concat(result, "You're good")
            break;
        case 4:
            return result.concat(result,"You're best")
            break;
        case 5:
            return result.concat(result, "You're excellent")
            break;
        default:
            return result.concat(result,"You've no record available")
            break;
    }
}

console.log("Checking user status:" + checkResult(3)) 

// 4. without parameter and with return type
function showUserGoal() {
    let goal = 45
    let goal_status = ""
    if (goal >= 0 && goal <= 39.99) {
        goal_status = "Beginner Level"
    }else if(goal >= 40 && goal<= 64.99){
        goal_status = "Intermediate level"
    }else if(goal>= 65 && goal <= 89.99){
        goal_status = "Advanced Level"
    }else if(goal >= 90 && goal <= 100){
        goal_status = "Expert Level"
    }else{
        goal_status = "Please set your goal between 0-100"
    }
    return goal_status
}

console.log("User goal checker: " + showUserGoal())