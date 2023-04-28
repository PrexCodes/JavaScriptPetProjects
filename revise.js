let record = [
    
]
let studentdata = {}
const prompt = require('prompt-sync')();




// console.log(date)
// console.log(newtime)

const attendance = () => {
while(true){
    let newdate = new Date()
    let datetime = newdate.toString();
    let newtime = datetime.slice(16, 24)
    // console.log(datetime)
    let date = datetime.slice(0, 15)
    let time = newtime.split(":")[0]
    let time1 = newtime.split(":")[1]
    let time2 = newtime.split(":")[2]

let username = prompt('Put a Name: ').toLowerCase()
if (username === 'q'){
    break
}
if(time > 12){
    let realtime = `${time % 12}:${time1}:${time2}PM`;
    studentdata = {
        name: username,
        date: date,
        time: realtime
    }
    record.push(studentdata)
}
else if(time == 12){
    let realtime = `${time}:${time1}:${time2}PM`;
    studentdata = {
        name: username,
        date: date,
        time: realtime
    }
    record.push(studentdata)
    
}
else{
    let realtime = `${time}:${time1}:${time2}AM`;
    studentdata = {
        name: username,
        date: date,
        time: realtime
    }
    record.push(studentdata)
}
console.log(record)
}
}



class Register{
    

    add = () => {
        while(true){
            let newdate = new Date()
            let datetime = newdate.toString();
            let newtime = datetime.slice(16, 24)
            // console.log(datetime)
            let date = datetime.slice(0, 15)
            let time = newtime.split(":")[0]
            let time1 = newtime.split(":")[1]
            let time2 = newtime.split(":")[2]
        
        let username = prompt('Put a Name: ').toLowerCase()
        if (username === 'q'){
            break
        }
        if(time > 12){
            let realtime = `${time % 12}:${time1}:${time2}PM`;
            studentdata = {
                name: username,
                date: date,
                time: realtime
            }
            record.push(studentdata)
        }
        else if(time == 12){
            let realtime = `${time}:${time1}:${time2}PM`;
            studentdata = {
                name: username,
                date: date,
                time: realtime
            }
            record.push(studentdata)
            
        }
        else{
            let realtime = `${time}:${time1}:${time2}AM`;
            studentdata = {
                name: username,
                date: date,
                time: realtime
            }
            record.push(studentdata)
        }
        console.log(record)
        }
        }

    remove(){
        while(true){
        let rename = prompt('Which name do you want to remove? ')
        record = record.filter((el)=>{
            return el.name != rename;
            
        })
        console.log(record)
        
        
    }
    }
}

let work = new Register()
work.add()
work.remove()
