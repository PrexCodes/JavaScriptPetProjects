//function newMan(){}
//const (newman ()=>{})

function newGame(){
    console.log(''.length)
    let gues = [1, 2, 3, 4, 5, 6, 7]
    let rand = Math.floor(Math.random()*gues.length+1)
    console.log(rand)
    
    let predict = 3;
    
console.log('My prediction is: ', predict , 'The random is: ', rand)
if(predict > rand){
    console.log('It is greater')
}
else if(predict < rand){
    console.log('It is lesser')
}
else{
    console.log('It is correct')
}
}



function maxval(){
    let arr = [3, 0, 1, 6]
result = Math.min(...arr)
console.log(result)
}
//function type conversion
function newmath(a){
    return a - 3;
}

// console.log(newmath("s"))

// function default value
function newDef(val = ' 😊 ', numb=50){
    return val.repeat(numb)
    
}

// console.log(newDef())
// [1, 3].sort((a, b)={
//     return: a - b
// // })

// function math3(a, b){
//     return a > b
// }
// console.log(math3(3, 5))


// function sda(){}
//fat arrow 


let maxvalue = (arr) => {
    return Math.max(...arr)
};
let newArr = [1, 8, 5, 0]
console.log(maxvalue(newArr))

let myMaxx = (arr)=>{
    let arranged = arr.sort((a, b)=>{
        return a-b
    })
    return arranged[arranged.length-1]
}
console.log(myMaxx([4, 2, 3, 89, 90]))

// //create a function that will parse the values of naira of a given integer
// // 700 - #700
// // 8000 - #8,000

let naira = (val) =>{
    if (val < 1000){
        return '₦' + val
    }
    else if(val >= 1000 && val<100000){
        let a = val.toString().split("")
        let b = a.splice((a.length % 3 / Math.floor(a.length / 3) ), 0, ',')
        a.unshift("₦")
        // for (let count = 0; count < b.length; count++){
        //     return newar.push(a[count])
        //  }
        
        return a.join("")
               
    }
    else if(val >= 100000){
        let a = val.toString().split("")
        let b = a.splice((a.length % 3 - Math.floor(a.length / 3) -1 ), 0, ',')
        a.unshift("₦")
        // for (let count = 0; count < b.length; count++){
        //     return newar.push(a[count])
        //  }
        
        return a.join("")
                    }
    }


// let nairaC = (val) =>{
//     if (val < 1000){
//         return '₦' + val
//     }
//     else{ 
//         let newarr = val.toString().split("")
        
        // for(i = val.toString().length*-1; i > 0; i++){
        //     newarr.splice(i, 0, ',')
            
        // }
//         return newarr
        
        

//     }
// }
// console.log(nairaC(10000000))
// a = [1, 0, 0, 0]

// for(i=a.length; i <= a.length*-1; i=-3){
//     console.log(i)
//     a.splice(i, 0, ',')
//     break
// }
// console.log(a)


function Naira(val=0){
    return '₦'+val.toLocaleString()+".00"
}

console.log(Naira(100))


let enaira = () => {
    
}