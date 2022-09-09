const fs = require('fs')

// read & display food async
let food = fs.readFile('food.txt', 'utf8', (err, food) => {
    console.log(food)
})
console.log('We ate this')

// repeat for drinks
let drinks = fs.readFile('drinks.txt', 'utf8', (err, drinks) => {
    console.log(drinks)
})
console.log('We drank this')