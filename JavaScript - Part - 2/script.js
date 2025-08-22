console.log("Traffic Light Simulation");
let color = prompt("Enter the color Name : ");

if(color  === "red") {
    alert("Stop Please");
}else if( color === "yellow") {
    alert("Get Ready");
} else if(color === "green") {
    alert("Go Please");
}else {
    alert("Invalid Color");
}