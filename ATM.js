const bank = "JS Bank";

let accountBalance = 1000000;
let accountName = "Elon Musk";
let isAccountActive = true;

const userSession = {
    loginTime: "2026-02-21 12:00:00",
    sessionID: 123456789n,
    isVerified:  true
}

const transactionHistory = [ "$40000", "$50000", "$60000" ]

// ARITHMETIC OPERATORS 

const withdrawalAmount = 50000
const newBalance = accountBalance - withdrawalAmount
console.log( newBalance)

let exponent = 1000 ** 3
console.log(exponent)

let remainder = withdrawalAmount % 500 === 0
console.log(remainder)

let attempts = 10
console.log(++attempts)

// COMPARISON OPERATORS

let evaluation = withdrawalAmount <= accountBalance
console.log(evaluation)

let equal = userSession.sessionID === 123456789n
console.log(equal)

let notequal = accountBalance !== 0
console.log(notequal)

// DEBUGGING & OUTPUT

console.table(userSession)

console.warn("Insufficient funds for withdrawal")

console.error("wrong session ID")

console.log(typeof transactionHistory[1])


console.log(transactionHistory.length)

const compareNumber = 5 === 5 && 4 < 4
console.log(compareNumber)

const compareNumber2 = 0 == 0 || 4 < 4
console.log(compareNumber2)

// DATE OBJECT
const year = new Date().getFullYear()
console.log(year)

const date = new Date(). toLocaleDateString()
console.log(date)

const day = new Date(). toLocaleTimeString()
console.log(day)

const time = new Date().getDay()
console.log(time)

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(weekdays[time])

// STRING METHODS
let schoolName = "JS University  "
let complete = 'Technologies'
let resolved = schoolName.trim()
console.log(resolved.length)
console.log(resolved.toUpperCase())
console.log(resolved.includes("z"))
console.log(resolved.charAt(4))
console.log(resolved.concat(complete))

// TEMPLATE LITERALS
let sentence = `I attend ${schoolName.trim()} ${complete}`
console.log(sentence)

// NUMBER METHODS
let myNum = 123.456768532
let converted = myNum.toString()
console.log(typeof converted)
console.log(myNum.toFixed(2))

console.log(typeof Number("123.45"))

// MATH OBJECT
const random = Math.random() * 100
console.log(Math.floor(random))

const randomInteger = Math.floor(Math.random() * 100) + 1
console.log(randomInteger)

const sessionId = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
console.log(sessionId)

let decimal = 4.7
console.log(Math.round(decimal))

let numbers = [10, 20, 5, 15]
console.log(Math.min(...numbers))

// TYPES OF FUNCTIONS - ALL FUNCTIONS CAN TAKE PARAMETERS AND RETURN VALUES
// Function Declaration - this can also be nameless
function named() {
    console.log("This is a named function")
    this.name = "Lanre"
    return this.name
}

// Function Expression - A nameless function declaration that is assigned to a variable
const expression = function() {
    console.log("This is a function expression")
}

// Arrow Function - A shorter syntax for writing function expressions
const arrow = () => {
    console.log("This is an arrow function")
}

// Immediately Invoked Function Expression (IIFE) - A function that is executed immediately after it is defined
(function() {
    console.log("This is an IIFE")
})()

// Generator Function - A function that can be paused and resumed, allowing for asynchronous programming and comes with the yield keyword to produce a sequence of values on demand.
function* generator() {
    yield 1
    yield 2
    yield 3
}
console.log(generator().next())

// Asynchronous Function (Async) - A function that returns a promise and can be used with the await keyword for asynchronous programming ( These are operations that takes time to complete such as fetching data from an API or reading a file,sign up and log in processes, payment processing)
async function asyncFunction() {
    console.log("This is an asynchronous function")
}

// Constructor Function - A function that is used to create objects and is called with the new keyword
function Constructor(name, email, password, age) {
    this.name = name
    this.email = email
    this.password = password
    this.age = age
}
const user = new Constructor("Lanre", "lanre@example.com", "password123", 25)
console.log(user)

// PARAMETERS 
function clareSentence(schoolName) {
    console.log(`I attend ${schoolName}`)
}

clareSentence("JS University")

// OBJECTS AND ARRAYS
// OBJECT METHODS
const Profile = {
    name: "Amanda",
    email: "stayjiggy@example.com",
    password: "password123",
    age: 30,
    isStudent: false,
}
console.log(Profile.name)
console.log(Profile.email)
console.log(Profile.password)
console.log(Profile.age)
console.log(Profile.isStudent)

const { name, email, password, age, isStudent } = Profile
console.log(`my name is ${name}, my email is ${email}, my password is ${password}, I am ${age} years old and it is ${isStudent} that I am a student`)

let keys = Object.keys(Profile)
console.log(keys)
console.log(Profile["name"]) 

let values = Object.values(Profile)
console.log(values)

let entries = Object.entries(Profile)
console.log(entries)

// Bracket Notation is used for the looping through the object and accessing its properties dynamically, while Dot Notation is used for accessing properties directly when the property name is known and does not contain special characters or spaces.

// ARRAY METHODS
// Array is divided into 2 types - Array Methods and Array Iteration Methods
// Array Methods is divided into 2 types - Mutating Methods and Non-Mutating Methods. Mutating Methods are methods that change the original array while Non-Mutating Methods do not change the original array but instead return a new array or value based on the original array.

// MUTATING ARRAY METHODS
const Games = ["God of War", "The Last of Us", "Uncharted","Fortnite","Call of Duty","Assassin's Creed"]
console.log(Games)
Games.push("Cyberpunk 2077")
console.log(Games)
Games.pop()
console.log(Games)
Games.unshift("Minecraft")
console.log(Games)
Games.shift()
console.log(Games)
Games.splice(2, 1, "Red Dead Redemption")
console.log(Games)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num)

const sorted = num.sort((a, b) => b - a)
console.log(sorted)

// NON-MUTATING ARRAY METHODS
const Cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"]
const combined = Cities.concat(["San Antonio", "San Diego"])
console.log(combined)
const sliced = Cities.slice(1, 5)
console.log(sliced)
const index = Cities.indexOf("Chicago")
console.log(index)
console.log(Cities.includes("Houston"))
console.log(Cities.at(2))
console.log(`i have been to the following cities: ${Cities.join(", ")}`)

// ARRAY ITERATION METHODS
// Array Iteration Methods are methods that allow you to iterate through an array and perform a specific action on each element of the array. These methods include forEach, map, filter, reduce, some, every, find, and findIndex.
const numbres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbres.forEach((num) => console.log(num / 2))
// forEach is a method that executes a provided function once for each array element. It does not return a new array but instead performs the specified action on each element of the original array. In this case, it divides each number in the numbres array by 2 and logs the result to the console.

numbres.map((num) => console.log(num * 2))
// map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it multiplies each number in the numbres array by 2 and logs the result to the console.

const filtered = numbres.filter((num) => (num > 5))
console.log(filtered)
// filter is a method that creates a new array with all elements that pass the test implemented by the provided function. In this case, it filters out all numbers in the numbres array that are greater than 5 and returns a new array containing those numbers.

const reduced = numbres.reduce((acc, num) => (acc + num), 0)
console.log(reduced)
// reduce is a method that executes a provided function against an accumulator and each element in the array (from left to right) to reduce it to a single output value. In this case, it sums all the numbers in the numbres array and logs the result to the console.

const find = numbres.find((num) => {return num > 5})
console.log(find)
// find is a method that returns the value of the first element in the array that satisfies the provided testing function. In this case, it finds the first number in the numbres array that is greater than 5 and logs it to the console.

const checkSome = numbres.some((num) => (num > 5))
console.log(checkSome)
// some is a method that tests whether at least one element in the array passes the test implemented by the provided function. In this case, it checks if at least one number in the numbres array is greater than 5 and logs the result to the console.

const checkEvery = numbres.every((num) => (num > 5))
console.log(checkEvery)
// Every is a method that tests whether all elements in the array pass the test implemented by the provided function. In this case, it checks if all numbers in the numbres array are greater than 5 and logs the result to the console.

const apiData = [
    { id: 1, name: "Wireless Earbuds", price: 100.59, category: "Electronics", ratings: 4.5, qty: 50 },
    { id: 2, name: "Smartwatch", price: 199.99, category: "Electronics", ratings: 4.2, qty: 30 },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, category: "Electronics", ratings: 4.0, qty: 20 },
    { id: 4, name: "Running Shoes", price: 89.99, category: "Footwear", ratings: 4.3, qty: 0},
    { id: 5, name: "Leather Wallet", price: 49.99, category: "Accessories", ratings: 4.1, qty: 15 },
];

const filterByQty = apiData.filter((item) => {return item.qty === 0})
console.log(filterByQty)

const mappedCard = apiData.map((item) => {
    return {
        name: item.name,
        price: item.price.toFixed(2),
        ratings: item.ratings,
    }
})
console.log(mappedCard)

const checkElectronics = apiData.every((item) => {
    return item.category === "Electronics"
})
console.log(checkElectronics)

// LOGICAL STATEMENTS
// Logical statements are used to perform different actions based on different conditions. These include if, else if, else, switch, and ternary operator.

const aged = 1000

if (aged < 18) {
    console.log("You are a minor")
} else if (aged >= 18 && aged < 65) {
    console.log("You are an adult")
} else {
    console.log("You are a senior citizen")
}

const checkAge = aged < 18 ? "You are a minor" : aged >= 18 && aged < 65 ? "You are an adult" : "You are a senior citizen"
console.log(checkAge)

// For multiple case scenerio, use switch to prevent multiple condition

switch (aged) {
    case 18:
        console.log("You are 18")
        break
    case 65:
        console.log("You are 65")
        break
    default:
        console.log("You are neither 18 nor 65")
        break;
}

const score = 30

switch (true) {
    case score >= 90:
        console.log("Grade A")
        break
    case score >= 80:
        console.log("Grade B")
        break
    case score >= 70:
        console.log("Grade C")
        break
    case score >= 60:
        console.log("Grade D")
        break
    case score >= 50:
        console.log("Grade F")
        break;
        default:
        console.log("Invalid score")
}    