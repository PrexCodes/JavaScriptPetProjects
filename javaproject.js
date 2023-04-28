//Rating System Assignment

let names = ["Harry","Ross",
"Bruce","Cook",
"Carolyn","Morgan",
"Albert","Walker",
"Randy","Reed",
"Larry","Barnes",
"Lois","Wilson",
"Jesse","Campbell",
"Ernest","Rogers",]

let stars = "⭐"


let arraylength = Math.floor(Math.random()*30) + 1
let ratingArray = []

// Array.from({length: 10}, ()=>{
//     return ratingArray.push(student)
// })
for(i = 0; i < arraylength; i++){
    namesalgorith = names[Math.floor(Math.random()*names.length)]
    ratingalgorith = Math.floor(Math.random()*5) + 1
    let student = {
        name: namesalgorith,
        rating: ratingalgorith
    }
    ratingArray.push(student)
}
let total = ratingArray.map((el=>{
    return el.rating
}))
let totalscore = 0;
for(i=0; i < total.length; i++){
    totalscore = totalscore + total[i]
}
let len1 = total.filter((el=>{
    return (el===1)
}))
let len2 = total.filter((el=>{
    return (el===2)
}))
let len3 = total.filter((el=>{
    return (el===3)
}))
let len4 = total.filter((el=>{
    return (el===4)
}))
let len5 = total.filter((el=>{
    return (el===5)
}))
console.log(`The rating of \n
1⭐: ${len1.length}people,\n 2⭐⭐: ${len2.length}people, \n 3⭐⭐⭐: ${len3.length}people, \n 4⭐⭐⭐⭐: ${len4.length}people, 5⭐⭐⭐⭐⭐: ${len5.length}people
`)
console.log(ratingArray)
console.log('Total Amount of people voted is ', total.length)
console.log('Total Rating is ', totalscore)
console.log('Average Rating is ', (totalscore/total.length).toFixed(2))



