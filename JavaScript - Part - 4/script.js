// console.log("JavaScript Intialized");
// let favorite = "avatar";

// let movie = prompt("Enter your Movie : ");
// if (movie) {
//     movie = movie.toLowerCase();
// }

// while((movie != favorite) ){
//     if(movie == "quit"){
//         console.log("You Quit.");
//         break;
//     }
//     console.log("Wrong Movie");
//     movie = prompt("Wrong guess please try again : ");
// }
// if(movie == favorite){
//     alert("You Win !❤️");
// }else {
//     alert("You quit !")
// }

//Nested Loops 
let heros = [
    ["NancyMcdonie", "Lalalisha", "Yun Shiyan"],
    ["Naruto", "Sasuke", "Sakura"]
];
for(let i = 0; i < heros.length; i++){
    for(let j = 0; j <= heros.length; j++){
        console.log(heros[i][j]);
    }
}


let marks = [
    ["Anshika", 45], ["Sashikant", 56], ["Rashmi", 33]
];
for(let x = 0; x < marks.length; x++){
    console.log(`Info of the  student :  ${x}`);
    for(let y = 0; y < marks[x].length; y++ ){
        console.log(marks[x][y]);
    }
}
