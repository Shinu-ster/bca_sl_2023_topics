// defining array
let places = ["Kathmandu", "lalitpur", "Bhaktapur", "Bafal"]
const gender = ["Male", "female" , "Others"]

// accessing array elements with indexing 
console.log(places[0])
console.log(places[1])
console.log(places[2])

for(let i = 0; i<places.length; i++){
    console.log(places[i])
}

// let num=[1,2,3,4,5]
// let target = 9
// for(let i =0;i<num.length;i++){
//     for(let j = 1;j<i;j++){
//         if(num[i]+num[j]== 9){
//             console.log(i)
//             console.log(j)
//         }
//     }
// }


// since array is an object so we can define it using array()
let lakes = new Array("Phewa","Begnas", "rara" )
// arrar properites and methods
// properties 

// length - return the length of an array
// example

console.log(places.length)
console.log(gender.length)
console.log(lakes.length)

// methods
// 1. push - append n element in an arrary
// example

let day = ["Domingo", "Lunes"]
console.log(day)
day.push("Martes")
console.log(day)
day.push("Miercoles")
console.log(day)
day.push("jueves","viernes")
console.log(day)

// 2. pop - removes last index element from an array
let capital = ["kathmandu", "canbara", "New dheli"]
console.log(capital)
capital.pop()
console.log(capital)
capital.pop()
console.log(capital)

// 3. shift() - removes element of first index
let movies = ["Animal", "The marvel", "Batman","Superman"]
console.log(movies)
movies.shift()
console.log(movies)
movies.shift()
console.log(movies)
movies.shift()
console.log(movies)

// 4.unshift() - add an element at the beginning of the array
let kings = ["Mahendra", "Birendra", "Gyanendra"]
console.log("Unshift Example")
kings.unshift("Prithvi")
kings.unshift("Gehendra")
console.log(kings)
