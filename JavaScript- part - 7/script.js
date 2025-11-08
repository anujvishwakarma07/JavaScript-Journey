console.log("Hello, World! This is JavaScript part - 7.");

const students = {
    name: "Anuj Vishwakarma",
    age: 21,
    Branch: "Computer Science",
    add : function(){
        console.log("I am Anuj vihswakarma  from computer science branc");
        console.log("My age is 21");
    },
    getname : function(){       // Regular function - it takes refrence from the object itself
        console.log(this);
    },
    getAge: () =>{         // Arrow function - it takes refrence from global object
        console.log(this);
    }
}