// console.log("Hello, welcome to JavaScript Journey - Part 7 Assignment!");

// arrayAvarage = (arr) => {
//     let sum = 0;
//     for ( let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     return ("The average of the array is: " + sum/arr.length);
// }
// console.log(arrayAvarage([1, 3, 4, 5, 6]));

// isEven = (num) => {
//     if(num%2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// }


// const object = {
//     message: "Hello Guys",


//     printMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.printMessage, 1000);

// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length : 5,
//     method (callback) {
//         callback();
//     },

// };

// object.method(callback, 1, 2);

let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    arguments[0](); // explicitly use arguments
  },
};

object.method(callback, 1, 2);