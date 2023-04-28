 
let xx = 13
console.log(12 > xx > 0);

let time = 64;

if (time > 24){
    time = time % 24
    console.log(time,': 00')
}
else{
    time = time
}

if (time >= 0 && time <=12){
    console.log("Good Morning");
}
else if(time >= 13 && time <= 16) {
    console.log('Good afternoon')
}
else{
    console.log('Good Evening');
}
