//Creating a Javascript Scoring system that will
//1. Add the Content to the Array
//2. Average
//3. Highest Attender
//4. 
const prompt = require('prompt-sync')();

let listofstudents = [
    
];
class StudentAttendance{
    add(){
        while(true){
            let name = prompt('Input a Name: ')
            if(name.toUpperCase()==="Q"){
                break
            }
            else{
                let score = Math.floor(Math.random()*101)
        
                let Student = {
                    name,
                    score,
                }
                listofstudents.push(Student)
                console.log(listofstudents)
            }
            
        }
    }
    average(){

        // console.log(listofstudents)
//average = total / length of items or no. of items
let score = listofstudents.map((el)=>{
    return el.score
})
let total = 0;
for(let i = 0; i<score.length; i++){
    total = total + score[i]
}

let average= total/score.length
console.log('The Average score is ', average)

    }
    highest(){
        let score = listofstudents.map((el)=>{
            return el.score
        })
        let maxscore = Math.max(...score)
        console.log('The highest score is',maxscore)
        
        //filter
        let highestPerson = listofstudents.filter((el)=>{
            return el.score === maxscore
        })
        console.log('The higest pointer is, ', highestPerson[0].name)
    }
}

//creating a new instance of the class
let att = new StudentAttendance()
att.add()
att.average()
att.highest()

//highest = maximum value
