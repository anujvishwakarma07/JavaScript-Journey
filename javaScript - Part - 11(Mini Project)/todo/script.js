console.log("Js initialized");

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerHTML = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete")

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function(event) {
    if(event.target.tagName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Element Deleted !")
    }
})

// let delbtns = document.querySelectorAll(".delete");
// for (removeBtn of delbtns) {
//     removeBtn.addEventListener("click",  function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }