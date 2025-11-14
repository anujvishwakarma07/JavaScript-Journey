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
