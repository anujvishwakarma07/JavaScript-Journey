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

// //Nested Loops 
// let heros = [
//     ["NancyMcdonie", "Lalalisha", "Yun Shiyan"],
//     ["Naruto", "Sasuke", "Sakura"]
// ];
// for(let i = 0; i < heros.length; i++){
//     for(let j = 0; j <= heros.length; j++){
//         console.log(heros[i][j]);
//     }
// }


// let marks = [
//     ["Anshika", 45], ["Sashikant", 56], ["Rashmi", 33]
// ];
// for(let x = 0; x < marks.length; x++){
//     console.log(`Info of the  student :  ${x}`);
//     for(let y = 0; y < marks[x].length; y++ ){
//         console.log(marks[x][y]);
//     }
// }
//For of loop
let fruits = ["mango","apple","banana", "Papaya", "Litchi"];
for(fruit of fruits){
    console.log(fruit);
}

//Nested For of loops
let heros = [["NancyMcdonie", "Lalalisha", "Yun axiyan", "YunBonghi"], ["Sikamaru Nara", "Choji Akimichi", "Ino Inozuka", "Neji Hyuga"]];
for(team of heros){
    for(character of team){
        console.log(character)
    }

}


//Assignment question : 
//1.

let arrr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let u = 0; u < arrr.length; u++){
    if(arrr[u] === num){
        arrr.splice(u, 1);
    }
};
console.log(arrr);

//2.
let number = 23422343344343;
let count  = 0;

let copy = number;
while( copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);