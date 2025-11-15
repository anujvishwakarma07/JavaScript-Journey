// console.log("JavaScript is initialized");

// //Dom Events - Events are the signals that something has occured.(user input/actions);
// let btn = document.querySelectorAll("button")
// console.dir(btn);

// btn.onclick = () => {
//     console.log("Button was clicked");
// }
// btn[0].onmouseenter = ()=>{
//     console.log ("Your button is clicked")
// }


// // using eventListener
// btn[0].addEventListener("click", hello);

// for(let btns of btn){
//     btns.addEventListener("click", say)
// }

// function say () {
//     console.log("Clicked using for ... of ")
// }

// function hello () {
//     console.log(" you used addEventListener Property");
// }


//use of this in Event Listener - 
let btn =  document.querySelector("button");
btn.addEventListener("click", ()=>{
    console.dir(btn.innerHTML)
})

//We can maintain the redundancy of the code -
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");

function backgroundcolor() {
    this.style.backgroundColor="blue";
}

btn.addEventListener("click", backgroundcolor);
h1.addEventListener("click", backgroundcolor);
h2.addEventListener("click", backgroundcolor);
p.addEventListener("click", backgroundcolor);

//Key Game- 
let text = document.querySelector("input");
text.addEventListener("keydown",function (event) {
    // console.log(event)
    // console.log("key = ", event.key);
    // console.log("code = ", event.code);
    // console.log("type = ", event.type);
    

    if(event.code == "ArrowUp"){
        console.log("Character moving to front dircection")
    }else if(event.code == "ArrowDown"){
        console.log("Character is moving to the backword direction")
    }else if (event.code == "ArrowLeft"){
        console.log("Charater is moving to the left direction")
    }else if(event.code == "ArrowRight"){
        console.log("Character is moving to the Right Direction")
    }else{
        console.log("Wrong key Pressed");
    }
} )