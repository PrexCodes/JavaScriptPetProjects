//A project of guess number
const prompt = require('prompt-sync')();

// console.log(userEntry)

//equal, greater or less than
//string
//number
//goat values
let guessgame = () => {
let randn = Math.floor(Math.random()*9)
while (true){
let userEntry = prompt('Guess a Number from 0 to 8:  ')

// console.log(randn)

if(isNaN(userEntry)){
    console.log('Wrong Input, Try Again')
}
else{
    let guess = parseInt(userEntry)
    if(guess > randn){
        console.log('It is greater than the Computer value, Try Again')
    }
    else if(guess < randn){
        console.log('It is lesser than the computer value, try again')
    }
    else{
        console.log('It is correct, You got it!', randn)
        break
    }
}
}
}
let st = 'Destiny'
array = ['beans', 'rice', 'apple', 'cash']
console.log(array[2])
