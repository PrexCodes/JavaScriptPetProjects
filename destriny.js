time = 70
timerresp = true

if (time > 24 ){
    time =time%24
     console.log (time,"hours")
}

let m= 0<= time && time <=12
let a= 13<= time&& time <=16
let e= 17<= time&& time <=24

switch(timerresp){
    case m:
        console.log("good morning");
        break
    case a:
        console.log("good afternoon");
        break
    case e:
        console.log("good evening");
        break
    default:
        console.log("good day")    
}
