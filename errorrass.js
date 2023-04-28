//There are 5 types of Error in JS
// RangeError	A number "out of range" has occurred ✔
// ReferenceError	An illegal reference has occurred ✔
// SyntaxError	A syntax error has occurred ✔
// TypeError	A type error has occurred ✔
// URIError	An error in encodeURI() has occurred ✔

//Range error


class ErrorCodelab{
    constructor(code){
        this.code = code;
    }
     myError(){
        try {
            const prompt = require('prompt-sync')()
            let usercode = prompt('Input your Code? \n')
            eval(usercode)
            console.log("There's no error");
        } catch (error) {
            console.log(error.name)
            console.log(error.message)
        }
    }
}

let ourError = new ErrorCodelab();
ourError.myError()