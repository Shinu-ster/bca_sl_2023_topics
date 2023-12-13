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

// 5. splice() - add and/or remove element from specified index
let languages = ["Java","JavaScript","PHP"]

//this methods take 3 arguments 
// 1st - position 
// 2nd - number elements want to remove 
// 3rd - elements can be more than on 

// to add elemnt - set 2nd argument 0 
console.log(languages)
languages.splice(1,0, "python")

// to remove elemnt - set 2nd argument greater than 0 
console.log(languages)
languages.splice(1,1,"Dart")
console.log(languages)
languages.splice(3,0,"go lang")
console.log(languages)
languages.splice(4,1,"Ruby")
console.log(languages)
languages.splice(4,1)
console.log(languages)
// 6.slice() - to break  array into another piece
console.log("Slice example")
let province = ["Bagmati","Koshi","Sudur paschim","Karnali","kavre"]
let province_two = province.slice(0,2)
console.log(province)
console.log(province_two)

// 7. concat - to merge one or more array without mutating primary array
let group_one = ["Red", "Blue"]
let group_two = ["Green", "Yellow"]
let group_three = group_one.concat(group_two)
console.log(group_three)

// 8.flat() - convert multi-dimension array to single glat array
let cities = [["KTM","POKHARA"],["BUTWAL","HETAUDA","JHAPA"]]
let cities_nepal = cities.flat()
console.log(cities)
console.log(cities_nepal)