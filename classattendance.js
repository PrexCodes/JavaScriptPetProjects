//attendance in a class format
let studentlist = []
class Student{
    
    
    constructor(student){
        this.student = student;
        this.studentlist = studentlist
        
    }

    add(student){
        let date = new Date().toDateString();

        let time = new Date().toTimeString().split(" ")[0];
        this.student = student;
          
        let studentdata = {
            "name": this.student,
            "date":date,
            "time":time
        }
        studentlist.push(studentdata)
    }
    
    remove(student){
        
        
    }

}

let data = new Student()

data.add('Precious')
data.add('Marvellous')
data.add('Dddd')



console.log(studentlist[1])
// studentlist.splice(studentlist.indexOf('Precious'))
console.log()