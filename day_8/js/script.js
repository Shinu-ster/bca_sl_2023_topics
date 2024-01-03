// Defining objects in javaScript

const item = {
    "item_code" : "001",
    "item_title" : "Wireless Mouse",
    "item_price" : 1200,
    "item_quantity": 5,
    "item_category": "Computer Accessories"
}

const bike = {
    model: "TVS Ronin",
    category: "Mixture",
    brand: "TVS",
    price: 450000,
    year: 2020,
    color: "Grey with Orange dab"
}

console.log(item)
console.log(bike)
// Accessing properties of object
// Method one
console.log("Bike Model: " + bike.model)
console.log("Bike Brand: "+ bike.brand)
// Method two 
console.log("item category: "+item["item_category"])
console.log("item price " +item["item_price"])

// Defining function inside object
// using this keyword - indicates the properties belong to that particular object
const movie = {
    movieName : "12th Fail",
    momvieGenre: "Drama",
    productionHouse: "H2 Productions",
    origin: "India",
    budget: "20 million",
    releasedYear: 2023,
    platform: "OTT",
    movieDetails: function(){
        return "Name: " +this.movieName + " Genre: " +this.momvieGenre
    } 
}

// Accessing function inside object
console.log("Movie Origin: " +movie.origin)
console.log("Movie Details: " + movie.movieDetails())

// Exercise 
// Lets assume a system: Social Post
// Define possible objects with their properties of the system

const SocialPost = {
    postTitle: "Hello Facebook",
    postDate: 2023,
    postLikes: "10k",
    postMentions: "ABC",
    postPic: "abc.jpg",
    postedBy: "ABC",
    postDetails: function(){
        return "Post Likes: " +this.postLikes + " Post Title " +this.postTitle
    }
}

console.log("Pic is posted by: " + SocialPost.postedBy)
console.log("Posted on: " + SocialPost.postDate)
console.log("Post Details: "+SocialPost.postDetails())

// date objects
// year - must be in proper format
const d1 = new Date("2024")
console.log(d1)

const d2 = new Date("2023", "01")
console.log(d2)

const d3 =  new Date("2024","01","24")
console.log(d3)