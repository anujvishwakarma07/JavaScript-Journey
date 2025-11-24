// console.log("Javascript Initialized");
// //Call Stack - It is basically a data structure , by which we are able to understand which funtion is calling right now;
// function hello(){
//     console.log("Hello");
// }

// function printHello() {
//     console.log("We Print first the Hello function");
//     hello();
// }

// printHello();

// //Visualization of the call stack
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


//BreakPoints - -
//We can use the breakpoints in the browser for debugging the code and understand the logic flow and callstack on the browser;


//JS is a singal threaded language - all the code exicution flows in a singal thread, it can not be exicute multiple functions and arguments at a same time, for rosolving this Problems we have the callbacks.
//We understand this thing by using the callbacks and the setTimeout functions

// setTimeout(() => {
//     console.log("Hello World !");
// }, 2000);

// setTimeout(() => {
//     console.log("Hi Anuj! Are you able to understand, how is the flow of the code");
// }, 2000);

// console.log("How it possible , javascript able to run multiple arguments at a same time ")
//  setTimeout(() => {
//     console.log("Behind the reason is that , browser have the capability to run multiple argument at a same time, becouse browsers code written in the c++ language , and that language is not single threaded language");
//  }, 2500);

//  // Callback Hell - 

// //  let h1 = document.querySelector("h1")

// //  function changeColor(color, delay){
// //     setTimeout(() => {
// //         h1.style.color = color;
// //     }, delay);
// //  }
 
// // changeColor("red", 1000);
// // changeColor("pink", 2000);
// // changeColor("yellow", 3000);   //This method is little bit lenthyy

// // we use callback for solve this problem very easily - 
// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//          if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("pink", 1000, ()=>{
//     changeColor("red", 1000, ()=>{
//         changeColor("pink", 1000, ()=>{
//             changeColor("green", 1000, ()=>{
//                 changeColor("purple", 1000, ()=>{
//                     changeColor("orange", 1000)
//                 })
//             })
//         })
//     })
// }) // So this nesing is called calllback Hell --> For resolving this callback hell probelem we have the promises and async and awake functions keywords

//  function saveToDb (data, success, failure) {
//     let dataSpeed  = Math.floor(Math.random() * 10) + 1;
//     if(dataSpeed > 4) {
//         success();
//     }else {
//         failure();
//     }
// }

// saveToDb("apna collage", ()=> {
//     console.log("Success : Your Data is saved");
//     saveToDb("Apna Collage", ()=>{
//         console.log("Data is Saved");
//     }, ()=>{
//         console.log("Weak connection !");
//     })
// }, ()=>{
//     console.log("Failure : Your data is not saved");
// });

// //Promises - We use the same code and optimize this code by using the promises;

// function saveToDb(data){
//     return new Promise ((resolve, reject) => {
//         let internetSpeed  = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("Success : Data is Saved");
//         }else {
//             reject("Failure : Low Internet Connecton");
//         }
//     });
// }


// // Promise is a object so , promise also have his own method - then(), catch() 

//  let request = saveToDb("apna collage");
//  request
//     .then(()=> {
//         console.log("Promise was Resolved");
//         console.log(request);
//     })
//     .catch (()=>{
//         console.log("Promise was Rejected");
//         console.log(request);
//     })

// //Promise Chaining - 
// let request = saveToDb("apna collage");
//  request
//     .then((result)=> {
//         console.log("Promise was Resolved");
//         console.log("result of Promise : "+result);
//         return saveToDb("CodeWithHarry");
//     })
//     .then((result)=>{
//         console.log("Data was Saved");
//         console.log("result of Promise : "+result);
//         return saveToDb("Harish Khan");
//     })
//     .then((result)=>{
//         console.log("Data 3 is Saved");
//         console.log("result of Promise : "+result);
//     })
//     .catch ((error)=>{
//         console.log("Promise was Rejected");
//         console.log("error of Promise : "+error)
//         console.log(request);
//     })

// Now we optimize the callback hell of color  by using the promises
let h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("Red color was changed!");
        }, delay);
    })
}
colorChange("red", 500)
.then(()=>{
    console.log("Red color was changed");
    return colorChange("pink", 500);
})
.then(()=>{
    console.log("Pink color was changed");
    return colorChange("yellow", 500);
})
 .then(()=>{
    console.log("Yellow color was changed");
    return colorChange("green", 500);
 })
 .then(()=>{
    console.log("Green color was changed");
 })




