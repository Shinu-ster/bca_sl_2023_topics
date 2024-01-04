// DOM - element 
// getElementById() - we can access HTML elemnt by attribute i.e id
// example
const title = document.getElementById("title")
const content = document.getElementById("content")
const button = document.getElementById("button")

// changing HTML Content
title.innerHTML = "HTML DOM - JS"
content.innerHTML = "JS DOM | HTML Element property"

// here innerHTML property is use to manipulate data inside
// HTML Element

// style property
button.style.color = "azure"
button.style.fontFamily = "monospace"
button.style.backgroundColor = "darkslateblue"
button.style.border = "0"
button.style.cursor = "pointer"
button.style.padding="10px"
button.style.boxShadow = "12px"
button.style.borderRadius = "5px"

// classList property
// add() and remove() method
button.classList.add("button")