let todo = [];

let task = prompt("Enter what you want to do");

while (true) {
    if (task == "quit") {
        console.log("Quiting");
        break;
    }
    if (task == "list") {
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    } else if (task == "add") {
        task = prompt("Enter your task what you want to add");
        todo.push(task);
        console.log("task added Seccessfully");
    } else if (task == "delete") {
        let idx = prompt("which index task you want to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("Wrong Request - ")
    }

    task = prompt("Enter what you want to do");

}

