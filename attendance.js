const prompt = require('prompt-sync')();
let attendance = () => {
let arrayofstudents = [];

while(true){


let date = new Date().toDateString();

let time = new Date().toTimeString().split(" ")[0];

let studentName = prompt('Input your Name: ')
if(studentName === 'q'){
    break
}
else{
studentdata = {
    "name": studentName,
    "date":date,
    "time":time

}
arrayofstudents.push(studentdata)
console.log(arrayofstudents)
}

}
console.log('')
console.log(`There were ${arrayofstudents.length} students present today`)
console.log(' They are: ')

for(i = 0; i < arrayofstudents.length; i++){
    console.log(`${i+1}. ${arrayofstudents[i].name}`)
}
}


attendance();