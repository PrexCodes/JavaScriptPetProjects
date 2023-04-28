//creating a rating system
//1. capture list of names in random order
//2. give list of rating in random order
//3. Give total and average rating
//4. Total amount of people that voted
//5. Total that voted for each voting level

let names = [
    "Harry","Ross",
    "Bruce","Cook",
    "Carolyn","Morgan",
    "Albert","Walker",
    "Randy","Reed",
    "Larry","Barnes",
    "Lois","Wilson",
    "Jesse","Campbell",
    "Ernest","Rogers", "Precious"
]

let listofraters = []
let amount = Math.floor(Math.random()*21) + 2
if(amount )
for(let i = 0; i<amount; i++){
let randomnames = names[Math.floor(Math.random()*names.length)]
let rating = Math.floor(Math.random()*5) + 1

let rater = {
    name: randomnames,
    rating,
}
listofraters.push(rater)
}
console.log(listofraters)

let frating = listofraters.map((el)=>{
    return el.rating
})
// console.log(frating)

let trating = frating.reduce((a,b)=>{
    return a + b
})
let average = trating/listofraters.length
let totalvoters = listofraters.length
console.log(totalvoters, 'people voted ')
console.log('The net total rating is: ', trating)
console.log('The average rating is ', average.toFixed(1))

//
let am1, am2, am3, am4, am5
am1 = frating.filter((el=>{
    return el === 1
})).length
am2 = frating.filter((el=>{
    return el === 2
})).length
am3 = frating.filter((el=>{
    return el === 3
})).length
am4 = frating.filter((el=>{
    return el === 4
})).length
am5 = frating.filter((el=>{
    return el === 5
})).length

console.log(am1, 'people voted 1:⭐')
console.log(am2, 'people voted 2:⭐⭐')
console.log(am3, 'people voted 3:⭐⭐⭐')
console.log(am4, 'people voted 4:⭐⭐⭐⭐')
console.log(am5, 'people voted 5:⭐⭐⭐⭐⭐')