// exercise
// 1. make one div
// 2. set its width 100% and height to 400px
// 3. set background color to red
// 4.set text color to white
// 5.change background color with JS Event
// 6. make two button
// first button "random Color" secondbutton "blue"

const change = document.getElementById("changeColor")
const randColor = document.getElementById("randColor")
const box1 = document.getElementById("box1")
change.addEventListener("click",()=>{
    box1.style.backgroundColor= "blue";
})


randColor.addEventListener("click",()=>{
    let R = Math.random() * 255;
    let B = Math.random() * 255;
    let G = Math.random() * 255;
    R = parseInt(R) 
    G = parseInt(G) 
    B = parseInt(B) 
    R = "20"
    G = "175"
    B = "250"

    console.log("rgb("+R+","+G+","+B+")")
    box1.style.backgroundColor = "rgb("+R+","+G+","+B+")"
})