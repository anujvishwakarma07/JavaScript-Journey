// console.log("JavaScript Initialized");

// //Selecting the element by Id - 
// let imgObj = document.getElementById("mainImg")
// imgObj.src = "https://www.shutterstock.com/image-vector/iron-man-mask-armour-special-600nw-2272933395.jpg"

// //Selecting the element by the class name -
// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfGgorKCV-AN0lWS_DlLYMX6uD7ES5kL6dA&s"
//     console.log(`value of image no ${i} is changed`);
// }

// //Selecting the elemnent By the tag name -
// let tag = document.getElementsByTagName("p")
// tag[1].innerHTML = 'Hello Guys'
// "Hello Guys"

// //Selecting the element By the querySelector - 
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// //Selecting the all element By the querySelectorAll - 
// console.dir(document.querySelectorAll("h1"));
// console.dir(document.querySelectorAll("#description"));
// console.dir(document.querySelectorAll(".oldImg"));


//text base and content base properties.
let text = document.querySelector("p").innerText
console.log(text)
text = "Hi, I am Peter Parker"
let content = document.querySelector("p").textContent
console.log(content)
let html = document.querySelector("p").innerHTML
console.log(html)

// Manipulation of the attributes -
let img = document.querySelector("img").getAttribute("id")
console.log(img)

let upImage = document.querySelector("img").setAttribute("id", "spidermanImg")

//Manipulation of the sytle 
let changeStyle = document.querySelector
    ("img").style.borderRadius = "15px"

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "green"
}

// let result = (links) => {
//     for (let i = 0; i < links.length; i++) {
//         links[i].style.color = "yellow"
//     }
// }
// result(links)

//using Classlist
let clssOfEle = document.querySelector("img");
console.log(clssOfEle.classList);
clssOfEle.classList.add("newClass")
console.log(clssOfEle.classList)

// document.querySelector("h1").style.color = "red"
document.querySelector("h1").classList.remove("underline", "spd", )

let ggg = document.querySelector("h1").classList.contains("underline")
console.log(ggg)

//Navigation -
let find = document.querySelector("img").parentElement;
console.log(find)

let children = document.querySelector("div")
console.log(children.children)
console.log(children.previousElementSibling)
console.log(children.childElementCount)

//Adding element in the document - 
let newEle = document.createElement("p");
newEle.innerHTML = "Hi, How are You , I am Anuj. What about You ?";
let newPara = document.querySelector("p").parentElement.prepend(newEle);
console.log(newPara)

//Appending the button in the box
let btn = document.createElement("button");
btn.innerHTML= "Click me!"
document.querySelector(".box").append(btn);
document.querySelector(".box").appendChild(newEle);

//Remove element form the documment
document.querySelector(".box").removeChild(btn);
document.querySelector(".box").removeChild(newEle);

 



