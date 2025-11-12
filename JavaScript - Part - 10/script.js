console.log("JavaScript is initialized");

//Dom Events - Events are the signals that something has occured.(user input/actions);
let btn = document.querySelector("button")
console.dir(btn);

btn.onclick = () => {
    console.log("Button was clicked");
}