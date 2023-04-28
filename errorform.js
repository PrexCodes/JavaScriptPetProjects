// name = "Precious"
// console.log(name)



// try{
//     const name = "Peter"
//     name = "Tunde"
//     console.table(name)

// } catch (error) {
//     throw new Error('I am doing it well')
//     // console.log(don.name)
//     // console.log(don.message)
// } finally{
//     console.log('Try this again ')
// }

// function myError(message){
//     this.message = message;
//     this.name= 'Pressing Error'
//     this.stack = 'Create a Dummy Project'
// }

// console.log(myError('Document'))


//Error assignment - Class to create 5 different errors
//Error name will be changing to reflect the error name

// class Errors{
//     constructor(error){
//         this.error = error

//     }


// }


// function typeError() {
//     try {
//         const name = error
//         console.log(name)
//     } catch (err) {
//         console.log(err.name)
        
//     }
// }

// return typeError()

/*
EvalError	An error has occurred in the eval() function
RangeError	A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	A syntax error has occurred
TypeError	A type error has occurred
URIError	An error in encodeURI() has occurred

*/
// Range error
// try {
//     let num = 1;
    
//     console.log(num.toPrecision(500))
// } catch (error) {
//     console.log(error.name)
// }

//Reference error
// try {
//     let num = 1;
//     console.log(nums)
    
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
// }

//Syntax Error
// try {
//         eval("Precious 'Don")
        
//     } catch (error) {
//         console.log(error.name)
//         console.log(error.message)
//     }

//Type eRROR
// try {
//         let num = 1;
//         console.log(num.toUpperCase())
        
//     } catch (error) {
//         console.log(error.name)
//         console.log(error.message)
//     }

//URI Error
// try {
//       let URI = "%$%&%"
//       console.log()
// } catch (error) {
    
// }

class Error{
   
            errorCatch(){
            try {
                let prompt = require('prompt-sync')();
                let prop = prompt('Type in your code? \n') 
                eval(prop)
        } catch (error) {
            console.log('The Error is', error.name)
        }
    }
}

let cError = new Error()
cError.errorCatch()

// function errorcatch(document){
// try {
//     eval(document)
    
// } catch (error) {
//     console.log('Error is ', error.name)
    
// }
// }

// errorcatch('console.log(num1)')
