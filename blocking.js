// include node's filesystem module to read text files
const fs = require('fs')

// read & display food
let food = fs.readFileSync('food.txt', 'utf8')
console.log(food)
console.log('We ate this')

// repeat for drinks
let drinks = fs.readFileSync('drinks.txt', 'utf8')
console.log(drinks)
console.log('We drank this')


