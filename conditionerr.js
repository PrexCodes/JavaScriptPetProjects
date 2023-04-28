 // const myMoney = (value) => {
//     let data = value.toString()

//     if(data.length === 1){
//         return data
//     }
//     else if(data.length === 2){
//         return data
//     }
//     else if(data.length === 3){
//         return data
//     }
//     else if(data.length === 4){
//         let res = data.split("")

//         return res
//     }
//     else{
//         return "This is wrong"
//     }
// }
// console.log(myMoney(1000))

const value = (a, b) => {
    console.log(arguments)
}
value(1, 2)