// console.log("Javascript Inittialized");
// //async function - this function besicaly return a promise  
// async function hello() {
//     // throw "404 Page not found"
//     return "Hello world"
// }
// hello()
//     .then((result) => {
//         console.log("this is resolve statement : " + result)
//     })
//     .catch((error) => {
//         console.log("Check you internet connection and try again : " + error);
//     })

// //await - this is basically used with the async function , since defined task is not completed untill the next function can not be runned.
// // first we defined a async function - 

// function name() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randNum = Math.floor(Math.random()*10);
//             console.log(randNum);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo(params) {
//     await name();
//     await name();
//     await name();
//     await name();
//     await name();
//     await name();
// }
// demo();


// //Now lets try this same thing in the previous class random random color generation;
// let h1 = document.querySelector("h1");

// function randomColor(color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let random = Math.floor(Math.random() * 8) + 1;
//             if (random > 3) {
//                 reject("Promise Rejected");
//             }
//             h1.style.color = color;
//             console.log(`the ${color} was changed`);
//             resolve("Promise Resolved");
//             // console.log("")

//         }, 1000);

//     })
// }

// async function h1Color() {

//     try {
//         await randomColor("red");
//         await randomColor("blue");
//         await randomColor("pink");
//         await randomColor("green");
//         await randomColor("red");
//         await randomColor("blue");
//         await randomColor("pink");
//         await randomColor("green");
//     } catch (err) {
//         console.log("Promise Rejected :" + err);
//     }
//     let num = 9;
//     console.log("The number is : "+num);
// }

// h1Color();

// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((response)=>{
//         console.log(response)
//         // console.log(response.json());
//         response.json().then((data)=>{
//             console.log(data);
//         })
//     }) 
//     .catch((err)=>{
//         console.log("ERROR", err);
//     })


    //Using async and await in the api calls and getting the data
    let url1 = "https://catfact.ninja/fact"
    async function getfact() {
         let res = await fetch(url1);
         let data = await res.json();
        console.log(data);
    }

    getfact()