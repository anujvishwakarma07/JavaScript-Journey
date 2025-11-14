

function randColor() {
    let red  = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

let btn = document.querySelector("button")
btn.addEventListener("click", () =>{
    let h3 = document.querySelector("h3");
    let randomColor = randColor();
    h3.innerText = randomColor;
    console.log("colorUpadated");
    document.querySelector("div").style.backgroundColor = randomColor;
})


