//Object Letrals
let students = {
    name: "Anuj Vishwakarma",
    branch: "Artificial Intelligence and Machine Learning",
    Roll_no: "2201651530016",
    subject: "JavaScript"
}
console.log(students)
console.log(students["name"])
console.log(students["subject"])
console.log(students.Roll_no)

let prop = "branch";
console.log(students[prop])

let obj = {
    1: "anuj",
    2: "Tanu",
    null: "school",
    undefined : "krishna",
    true: "false"
}
console.log(obj)

const studen = {
    name : "Anuj",
    age: 12,
    city: "Kanpur",
    marks: 25
}
studen.city = "Mumbai";
console.log(studen.city)
console.log(studen);

// for deletion of any key-value from the objects
delete studen.age
console.log(studen)

//Nested Object creation - 
let classInfo = {
    students_roll: {
        123: "Anuj",
        124: "Anshika",
        125: "Rashmi",
        126: "Aradhya",
        127: "Kishori",
    },
    branches : {
        123: "Aiml",
        124: "Biotech",
        125: "Nanoatech",
        126: "Chemicals",
        127: "Computer Science",
    },
    projects: {
        123: "AI Automation System",
        124: "ai auditoriam management",
        125: "ai automation of the classRoom",
        126: "Syystem  board management system",
        127: "Emi calcularot sytem ui design"
    }
}
console.log(classInfo.students_roll[125])