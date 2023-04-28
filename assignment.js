let score = 101;
let scorerresp = true;
let f = 0 <= score && score <= 39; 
let e = 40 <= score && score <= 44; 
let d = 45 <= score && score <= 49; 
let c = 50 <= score && score <= 59; 
let b = 60 <= score && score <= 74; 
let a = 75 <= score && score <= 100;
console.log(f, e, d, c, b, a)
switch(scorerresp){
    case a:
        console.log('Excellent');
        break
    case b:
        console.log("very good");
        break
    case c:
        console.log("good");
        break
    case d:
        console.log("pass");
        break
    case e:
        console.log("welldone");
        break
    case f:
        console.log("failed");
        break
    default: 
        console.log("Not availiable")

}
