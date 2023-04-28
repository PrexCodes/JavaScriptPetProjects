// /*
//     Attendance System.
//     Guess Game System.
// */
// const prompt = require("prompt-sync")();
// const attendance = () => {
//   let register = [];
//   let student = {};

//   while (true) {
//     let entry = prompt("Who are you or press 'q' to Exit: ");
//     let time = new Date();
//     let convTime = time.toString();
//     let timeDate = convTime.slice(0, 15);
//     let timer = convTime.slice(16, 24);
//     let newTime = timer.split(":")[0];

//     if (entry === "q") {
//       console.log(
//         `The Total Number of student in attendance is: ${register.length} students`,
//       );

//       console.log("which are: ");

//       register.map((el) => {
//         console.log(el.name);
//       });
//     } else {
//       if (newTime > 12) {
//         student = {
//           name: entry,
//           date: timeDate,
//           time: `${timer.split(":")[0] % 12}:${timer.split(":")[1]}:${
//             timer.split(":")[2]
//           }PM `,
//         };
//         register.push(student);
//       } else {
//         student = {
//           name: entry,
//           date: timeDate,
//           time: `${timer.split(":")[0]}:${timer.split(":")[1]}:${
//             timer.split(":")[2]
//           }AM `,
//         };
//         register.push(student);
//       }
//     }

//     console.log(register);
//   }
// };

// // attendance();

// for (let i = 1; i <= 4; i++) {
//   console.log(i - 1);
// }

class Rect {
    constructor(length, height) {
      this._length = length;
      this.height = height;
  
      // console.log(
      //   `the Height is: ${this.height}m and the length is: ${this.length}m`,
      // );
    }
  
    // perimeter 2(l+b)
    // area (lb)
    // diagonal h = rt(l*2 + b*2)
  
    perimeter() {
      return 2 * (this.height + this._length);
    }
  
    area() {
      return this.height * this._length;
    }
  
    get readValue() {
      return `${this._length} and ${this.height}`;
    }
  
    set readValue(length) {
      return (this._length = length);
    }
  }
  
  let rect = new Rect(8, 5);
  let rect2 = new Rect(1, 7);
  
  // rect2.length = 3;
  
  console.log((rect2.readValue = 8));
  console.log(rect2);
  
  function myRect() {}
  
  // let a = { name: "peter" };
  // console.log((a.name = "James"));
  // console.log(a);