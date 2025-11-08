console.log("Javascript initialized");

let arr = [1, 2, 4, 5, 5, 9];

let print = function(el) {
    console.log(el)
}

arr.forEach(print);

arr.forEach(function (el) {
    console.log(el)
})

let data = [{
    name : "Chandni",
    marks : 44,
    subject : "Physics"
},{
    name : "Anuj Vishwakarma",
    marks : 30,
    subject : "Chemistry"
},{
    name: "Shiva",
    marks: 99,
    subject: "Reasoning"
}]

data.forEach( function (students) {
    console.log("Marks : ",students.marks)
})

//Map function 
let marks = [4, 5, 23, 67, 99, 98];
let same_marks = marks.map( (el) =>{
    return el*2;
})

console.log(same_marks);


let gpa = data.map(function (students) {
    return students.marks/10;
})

console.log("gpa of students Marks : ", gpa);


//Filter Functions :

let numbs = [23, 45, 54, 87, 90, 56];
let evenNum  = numbs.filter((el) =>{
    return el%2 == 0;
})

console.log(evenNum);


//Every Function - It returns true ot false if the preseted elements satisfied the cosdition
let allEvenOrNot = numbs.every((el) =>{
    return el%2 == 0;
})
console.log(allEvenOrNot)

//Sum function : it returns if any presented element passed the condition
let isAny = numbs.some((el) =>{
    return el%2 == 0;
})
console.log(isAny)

//Reduse function :
let marks1 = [12, 45, 67, 44, 93, 90];
let result = marks1.reduce((acc, el) => {
    console.log(acc, " : ", el )
    return acc + el;
})
console.log(result);

//Finding the maximum number of the array by using the loop
let max = -1;
for(let i = 0; i < marks1.length; i++){
    if(max < marks1[i]){
        max = marks1[i]
    }
}

console.log("Maximus value is : ",max);

//By using the resuse function
maximumValue = marks1.reduce((max, el) => {
    if(max < el) {
        return el;
    }else{
        return max;
    }
})

console.log(maximumValue);

//Practice question - 1
let numbers = [37, 50, 70, 80, 90, 20];
let result2  = numbers.every((el) =>{
    return el%10 == 0;
})
console.log(result2)


//Find the minimum number of the array
let numbss = [98, 34, 53, 65, 34, 75, 87];
let minNum = numbss.reduce((min, el) =>{
    if(min > el){
        min = el;
    }

    return min
})
console.log("Min Number is :", minNum);

//Default Parameater
let add = (a, b = 8) =>{
    return a*b;
}
console.log("Addition is : ",add(6));

//Spead - Expand and iterable into multiple values. (Return the indivisual values)
let Arr = [23, 45, 64, 5, 546, 3443, 67]
console.log(...Arr);

//We can perform the same operation the string as well
let str = "Mahendra Singh Dhoni";
console.log(...str);

//We can also perform same thing in objects also
let obj = {
    name : "Anuj",
    Class: "B.Tech",
    Branch: "AIML",
}
let copyObj = {...obj, Section: "A"};
console.log(obj);
console.log(copyObj);


//Rest - Allows a function to take an infinite number of argumnets and bundle it them an array.
function name(...args) {
    let result3 = [];
    for(let i = 0; i < args.length; i++){
        result3.push(args[i] + 1);
    }
    return result3;
}
console.log(name(12,23,45,56,78,46));

// second Example
function sun(a, b, c, d){
    console.log(arguments)
} 

function mis(){
    console.log(arguments);
}

// Calculating the sum of the function
function addition(...argss) {
    return argss.reduce((add, el) => {
       return add + el;
    }) 
}


//Destructuring  - Storing the values of the array into the multiple variables.
let names = ["Chandni", "Tanu" , "Bitto", "Noor", "Madamji"];
let [winner, runnerup] = names;
console.log(winner, runnerup);

//Destructuring in the objects
let studenData = {
    name: "Chandni",
    age : 21,
    subjects: ["Hindi","General knowledge", "Mathmatics", "History", "Constitution"],
    username :  "amazing_lines_07",
    password: "Chandni@123",
    Class : "BSC"
}

let {username: user, password: secret} = studenData;

