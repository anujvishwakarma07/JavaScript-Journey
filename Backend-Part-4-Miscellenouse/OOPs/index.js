let arr1 = [2, 3, 4, 5, 12, 45];
let arr2 = [2, 3, 4, 5, 12, 45];
arr1.sayhello = ()=>{
    console.log("Hello I am say hello function");
}

arr2.sayhello = ()=>{
    console.log("Hello I am say hello function");
}


// Both methods are same but they are not giving the true output becouse both are functions are taking the indivisual space for storing the function.
console.log(arr1 === arr2);


//factory functions ; 
function students(name, age){
    const person = {
        name : name,
        age : age,
        talk (){
            console.log(` I can talk, and my name is ${this.name}`);
        }
    }

    return person;
}

