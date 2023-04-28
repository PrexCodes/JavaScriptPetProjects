const prompt = require("prompt-sync")();

let comp = 12;
// let guess = parseInt(prompt(' Guess my mind : '));
/*
x1 = parseInt(prompt(' Enter X1: '))
x2 = parseInt(prompt(' Enter X2: '))

if(isNaN(x1) || isNaN(x2)){
    console.log('Wrong Input');
}
else{
    console.log(x1+x2)
    console.log('It a valid number');
}

*/



// if(comp === guess){
//     console.log('Guess: ', guess, "Comp: ", comp);
//     console.log('You win');
// }
// else if(comp > guess){
//     console.log('Guess: ', guess, "Comp: ", comp);
//     console.log('It is greater');
// }
// else if(comp < guess){
//     console.log('Guess: ', guess, "Comp: ", comp);
//     console.log('It is lesser')
// }
// else{
//     console.log('Wrong')
// }

// console.log(isNaN(30));
let guessgame = () =>{
let randomNumb = Math.floor(Math.random()*5)


while(true){
    
    let userEntry = prompt("Take a Guess: or type 'Q' to exit: ")

    if(userEntry === 'Q'){
        break
    }
    else if(isNaN(userEntry)){
        console.log('E No fit work');
    }
    
    else{
           let entry = parseInt(userEntry)
           
        if(randomNumb === entry){
            console.log('You win')
            console.log('Your guess: ', entry, 'and the Random number is ', randomNumb)
            break
        }
        else{
            console.log('try again')
            console.log(randomNumb)
            
        }
    }
}
}

//attendance record
//greater than your guess
//thywill
//drink-water

guessgame();
/*
count = 0
while (count <=10){
    
    count++;
    if(count === 4){
        console.log("This is it: ", count)
        
    }
    else{
        console.log(count)
    }
    
}*/