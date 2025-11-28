// console.log("JavaScript Initialized");

// // Now we gonna use the axios for fetching the data

// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.addEventListener("click", async ()=>{
//     let fact = await getdata();
//     p.innerText = fact;
// })





// let url = "https://catfact.ninja/fact"

// async function getdata() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch (err) {
//         console.log("Error is" , err);
//         return "No fact found";
//     }
// }

// // console.log(getdata());



// //Now we are going to understand how can we pass headers by using the axios.

// const url = "https://icanhazdadjoke.com/"

// const config = {headers : {Accept: "application/json"}}
// async function getJokes() {
//     try{
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }
//     catch (e) {
//         console.log(e); 
//     }
// }

// getJokes()


//Now we are going to understand how can we change and the query string in the API.

let btn  = document.querySelector("button");
let input = document.querySelector("input");
let p = document.querySelector("p");

btn.addEventListener("click", async ()=>{
    // console.log("Button clicked")
    let value =  input.value;
    let country = value;
    console.log(country);
    let colArr =  await getCollages(country);
    console.log(colArr)
    show(colArr);
    
    
})

function show (colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let collages of colArr) {
        console.log(collages.name);
        let li = document.createElement("li");
        li.innerText = collages.name;
        list.appendChild(li);
    }
}

let url = "http://universities.hipolabs.com/search?name=";


async function getCollages(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e) {
        console.log("Error is : ", e)
        return e;
    }
};

getCollages();



