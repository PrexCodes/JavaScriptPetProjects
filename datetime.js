
let prompt = require('prompt-sync')();
// console.log(date, time)

let arrayofstudents = []

while (true){
    let date = new Date().toDateString()
    let time = new Date().toTimeString().split(" ")[0]
    let promptval = prompt('Input your Name: ')

if(promptval === 'q'){
    break
}
else{

    let student = {
    "name":promptval,
    "date":date,
    "time":time
}

arrayofstudents.push(student)
console.log(arrayofstudents)
}


}
console.log(`We have ${arrayofstudents.length} students in Class Today`)
console.log('They are: ')

for(i = 0; i < arrayofstudents.length; i++){
    console.log(i+1, '. ', arrayofstudents[i].name)
}
