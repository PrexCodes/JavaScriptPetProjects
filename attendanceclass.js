//i'm creating an attendance system using a class

let listofstudents = [];

class Student{
    constructor(student){
        this.student = student
    }
    add(student){
        this.student = student;
        let date = new Date().toDateString();
        let time = new Date().toTimeString().split(" ")[0]

        let studentdata = {
            "name": student,
            "date": date,
            "time": time,
        }
        
        listofstudents.push(studentdata)

    }
    remove(student){
        this.student = student;
        let stindex = listofstudents.findIndex(name)
        listofstudents.splice(stindex, 1)
    }

}

const students = new Student();
students.add('Precious')
students.add('Peter')
students.remove('Precious')
console.log(listofstudents)


