let diceVal = [1, 2, 3, 4, 5, 6]
let val = Math.floor(Math.random()*diceVal.length+1)
console.log(val)

if(val == 1){
    console.log('One,', 'Try Harder')
}
else if(val == 2){
    console.log('Two,', 'Do Better')
}
else if(val == 3){
    console.log('Three,', 'Not Bad')
}
else if(val == 4){
    console.log('Four,', 'Good Job')
}
else if(val == 5){
    console.log('Three,', 'Not Bad')
}
else{
    console.log('Excellent....');
}





// switch(val){
//     case 1:
//         console.log('One,', 'Try Harder')
//         break
//     case 2:
//         console.log('Two,', 'Do Better')
//         break
//     case 3:
//         console.log('Three,', 'Not Bad')
//         break
//     case 4:
//         console.log('Four,', 'Nice.')    
//         break
//     case 5:
//         console.log('Five,', 'Wow...')
//         break
//     default:
//         console.log('Six', 'Excellent...')
// }

guessedVal = 3
if (guessedVal < val){
    
    console.log('Guessed Value is less than Random Value')
}
else if(guessedVal > val){
    
    console.log('Guessed Value is more than Random Value')
}
else{
    console.log('The guessed value is correct')
}