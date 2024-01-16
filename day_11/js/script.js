// defining elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userName = document.getElementById("username");
const passkey = document.getElementById("passkey");
const errorMsg = document.getElementById("errorMsg")
const showForm = document.getElementById("showForm")
// defining btn
const btnReg = document.getElementById("btnReg");

// defining form
const regForm = document.getElementById("regForm")


// submit event
document.addEventListener('DOMContentLoaded',function(){
btnReg.addEventListener('click',function(event){
    if (firstName.value === "" || lastName.value === "" || userName.value === "" || passkey.value === "") {
        event.preventDefault()
        errorMsg.innerHTML = "All fields are required"
    }

});
});

// user submit event on form
regForm.addEventListener("submit",function(event){
    console.log("Form is submitted")
})

// arrow function eample
// shorter form of function

// ordinary funciton
function showMessage(){ return "Hello! How are you?" }

// arrow function
const msg= ()=>{ return "Hello! How are you?" }

// if single return function then
const message = () =>{
    "Hello! How are you"
}

// displaying form with event and hidden property
// of element

// to toggle form
showForm.addEventListener("click",()=>{
    regForm.hidden = !regForm.hidden
})

// exercise
// 1. make one div
// 2. set its width 100% and height to 400px
// 3. set background color to red
// 4.set text color to white
// 5.change background color with JS Event
// 6. make two button
// first button "random Color" secondbutton "blue"
