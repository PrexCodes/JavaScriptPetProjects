class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static readSignDistance(a, b){
        let mainX = a.x + b.x
        let mainY = a.y + b.y
        console.log(mainX + mainY)
    }
}

let pointa = new Point(3, 5)
let pointb = new Point(5,2)



//login student and their average javascript grid
//find the top student and the least student 
//diagonal
//assignment
//People will purchase items in the shop
//Show the top buyer

let a = [
    {
        name: 'Precious',
        score: 20
    },
    {
        name: 'Bright',
        score: 40
    },
    {
        name: 'Marvellous',
        score: 60
    },
    {
        name: 'Peter',
        score: 90
    },
    {
        name: 'Don',
        score: 90.5
    },
]

let doc = a.map((el)=>{
    return (el.score)
})

// let max = doc.sort((a, b)=>{
//     return b - a
// })

// let item = a.filter((el=>{
//     return el.score === max[max.length-1]
// }))

let docs = 0;
for(i = 0; i<doc.length; i++){
    docs = docs + doc[i]
}
console.log(docs/doc.length)
