//Creating a Class of Values - To get the average score and the highest score
//It should be created to be dynamic 
//
const prompt = require('prompt-sync')();
let listofstudents = [
    ];

    class Student{
        constructor(name, listofstudents=[]){
            this.name = name
            this.listofstudents = listofstudents
        }

        static add(name){

            while(true){
            let name = prompt("Input a Name: ")
            let date = new Date().toDateString()
            let time = new Date().toTimeString().split(" ")[0]
            let score = Math.floor(Math.random()*100)
            
            if(name === "r" | name === null){
                break
            }
            else{
            let studentdata = {
                name,
                score,
                // date,
                // time
            }
            listofstudents.push(studentdata)
            console.log(listofstudents)
            }
            }
            }
            
            static highest(){
            let scores = listofstudents.map((el)=>{
                return el.score
            })
            let maxscore = Math.max(...scores)
            let filter = listofstudents.filter((el)=>{
                return el.score === maxscore
            })
            
            
            console.log(`${filter[0].name} is the Man with the Highest Score [${maxscore}]`)
            }
            
            static average(){
            let scores = listofstudents.map((el)=>{
                return el.score
            })
            let total = 0;
            for(let i=0; i<scores.length; i++){
                total = total + scores[i]
            }
            total = (total/scores.length).toFixed(2), 
            console.log((`The average score for Codelab students is ${total}`))
            }

            
            
    }


    
    // Student.add()
    // Student.average()
    // Student.highest()



    
