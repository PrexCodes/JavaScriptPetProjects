//Guessgame from 0 - 5
//Four lives left
//Lives to go
//user input to be guessing the number
//user input should show how close they are to the number

let prompt = require('prompt-sync')();

let randomnumber = Math.floor(Math.random()*6)
// console.log(randomnumber)

for(i = 0; i < 4; i++){
    console.log(`You have tried for ${i} and you have ${4-i} lives left`)




    let userinput = prompt('Guess a number from 0 - 5: ')
    if(isNaN(userinput)){
        console.log("It's not a number")
    }
    else{
        uservalue = parseInt(userinput)
        if(uservalue > randomnumber){
            console.log('It is greater than the number')
        }
        else if(uservalue < randomnumber){
            console.log('It is lesser than the number')
        }
        else{
            console.log('You guessed correctly: ', randomnumber)
            console.log('You win')
            break;
        }
    }
}
if(uservalue != randomnumber){
console.log('Game Over')
}