const figlet =  require("figlet")

figlet("Hello World!", function(err, data) {
    if(err) {
        console.log("Something went Wrong !");
        console.dir(err);
        return;
    }

    console.log(data);
});