time = 25
timec= true

if (time > 24){
    time =time% 24
    console.log()
}
let m =0 <= time && time <=12
let a =13 <= time && time <=16
let e =17 <= time && time <=24

switch(timec){
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