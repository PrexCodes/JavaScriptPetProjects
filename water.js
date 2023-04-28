//Creating a water project
//1. User Input 
//2. Water level which will be increasing as time goes on
//3. Stop at a Particular Level and tell us we've done well... 5 Litres --> 500cl

let prompt = require('prompt-sync')();

let watedrink = () => {
    let waterlevel = 0;

while(true){
let userdrinklevel = prompt('What Quantity of water do you want to take in?: ')

//A condition for goats 
if(userdrinklevel === 'r'){
    
    break;
}
else if(isNaN(userdrinklevel)){
    console.log('Wrong Input, Put a Number value')
}
else{
    let watervalue = parseInt(userdrinklevel)
    waterlevel = waterlevel + watervalue
    console.log(waterlevel/100, 'LITRES taken')
    if(waterlevel >= 500){
        console.log("You've drank enough for today, You've done well")
        break
    }
    
}

}
console.log('Thanks for drinking')
}

watedrink()