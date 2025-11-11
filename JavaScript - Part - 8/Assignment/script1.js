console.log("Java Script Intialized");

//Question - 1
// Square and sum the array element using the arrow function and then average of the array

let squSum = (...arg)=>{
   let result = arg.reduce((sum, el) =>{
       return sum + el*el
    }, 0)
    return result;
}
console.log("Result : " , squSum(2, 2, 2, 2))
// let arr = [2, 2, 2, 2];
// let finalSum = arr.reduce((add, el)=>{
//     console.log(add)
//     return (add+el)
// }, 0)
// console.log(finalSum)


//Question - 2
//Create the new array using the map function whose each element is equal to the original element of the array.

let array = [2, 4, 5, 1, 6];
let reqResult = array.map((el)=>{
    return el+5
})
console.log(reqResult);

// Question - 3
// Create a new array whose element are in the uppercase of words present in the original array.

let name = ["Naruto", "Sakura", "Saduke", " Ino Yamanaka"];
let upppercaseArray = name.map((el)=>{
     return el.toUpperCase();
})
console.log(upppercaseArray)

//Question - 4
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and the all of the additional arguments doubled.

function doubleAndReturnAgs(arr, ...arg ) {
    return [...arr, ...arg.map((v) => v*2),];
}

console.log(doubleAndReturnAgs([1,2, 3, 4], 2, 2))

//Question - 5
// Write a function mergeObject that accepts two objects and return a new which contains all the kys and values of the first object and the second objects. 


let firstObject = {
    name : "Naruto Uzumaki",
    age: 21,
    NinjaType : "Perform Ninjutsu and Genjutsu"
}
let secondObject = {
    name: "Hinata",
    age : 20,
    NinjaType : "Taijutsu User with the Byakugaan Eyes"
}
function mergeObject(firstObject,secondObject) {
    {}
}
