const quote =[
    {author: "Mahatma_Gandhi",quote: "You must be the change you wish to see in the world."},
    {author: "Mother_Teresa" ,quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    {author:"Franklin_D_Roosevelt",quote:  "The only thing we have to fear is fear itself."},
    {author:"Walt Disney",quote:"The way to get started is to quit talking and begin doing"}
]

const display = document.getElementById("genQuote")
const author = document.getElementById("author")
const disQuote = document.getElementById("quote")


display.addEventListener("click",()=>{
    let rand = Math.floor(Math.random()*keys.length)
    data = quote[rand]
    author.innerHTML = data.author.replace("_"," ")
    disQuote.innerHTML = data.quote
})
