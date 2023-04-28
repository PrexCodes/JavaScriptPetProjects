//Creating a class with its properties
class Rect{
    //creating a method
    constructor(length, height){
        this.length = length;
        this.height = height;

        console.log(`The length is ${this.length}m and the height is ${this.height}m`)

    }
    diagonal(length, height){
        return (Math.sqrt())
    }

    get readitem(){
        return `${this.length} and ${this.length}`
    }
    set changeitem(length){
        return (this.length = length)
    }
    
}

let rect = new Rect(2,4);
let rect2 = new Rect(2, 3)

console.log(rect.readitem)

//1. water game
//2. nelson mandela deepest fear
//3. Guessing game - three trials
//4. Using a class to determine diagonal of a rectangle
//5. Use a class to add or remove items in an attendance register
console.log(rect.readitem)

