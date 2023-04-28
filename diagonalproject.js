class Rectangle{
    constructor(length, height){
        this.length = length;
        this.height = height;
    }
    // diagonal = sqrt(asquare + bsquare)
    diagonal(length, height){
        return Math.sqrt(length*length + height*height)
    }
}

let rect = new Rectangle()

console.log(rect.diagonal(6, 8))