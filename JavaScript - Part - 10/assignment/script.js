

console.log("Javascript initialized");

//Question - 1
let scrl = document.querySelector("body");
scrl.addEventListener("scroll", () => {
    console.log("Mouse scrolling");
})

let h1 = document.querySelector("h1");
h1.addEventListener("mouseout", () => {
    console.log("Mouse clicked");
})

h1.addEventListener("click", () => {
    console.log("It is clicked");
})

// Question - 2
let btn = document.createElement("button");
btn.innerHTML = "Sign in";
document.querySelector("body").appendChild(btn);
console.log(btn);

document.addEventListener("click", colChange)

function colChange() {
    document.querySelector("button").style.backgroundColor = "green"
    document.querySelector("button").style.color = "white"
}

//question - 3
let pass = document.querySelector("#pass");
let h2 = document.querySelector("h2");
pass.addEventListener("beforeinput", (event) => {
    // console.log(event);
    if(!/^[a-zA-Z]$/.test(event.data)) {
        event.preventDefault();
    }
});

pass.addEventListener("input", ()=>{
    h2.innerText = pass.value;
})

