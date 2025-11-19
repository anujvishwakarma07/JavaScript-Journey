console.log("js Inititalized");
document.querySelector(".box1").addEventListener("click", () => {
    console.log("Div is Clicked");
})
document.querySelector("ul").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("ul is clicked");
})

let li = document.querySelectorAll("li");
for (let lis of li) {
    lis.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("li is clicked");
    });
}

