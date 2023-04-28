const prompt = require('prompt-sync')();

class Rectangle{

    constructor(length, height){
        this.length = length;
        this.height = height;
    }

    diagonal(length, width){
        return (Math.sqrt(Math.pow(length, 2)+Math.pow(width, 2)))
    }
}

let rectangle = new Rectangle(3, 4)


    console.log(rectangle.diagonal(6,8))