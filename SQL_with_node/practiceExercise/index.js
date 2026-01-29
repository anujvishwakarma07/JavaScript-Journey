const express = require("express");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const Path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "kitcollage",
    password: "Bitto"
});


app.listen(port, () => {
    console.log(`App is listening in the port : ${port}`);
});

app.get("/", (req, res) => {
    let q = `select count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home", { count });
        })
    } catch (err) {
        res.send("An error occur in the Database");
    }
})

app.get("/user", (req, res) => {
    const q = "Select * from user";
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            //    console.log(users);
            res.render("user", { users });
        });
    } catch (err) {
        console.log("Error from the database");
    }
});

app.get("/user/:id/edit", (req, res) => {
    const { id } = req.params;
    const q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, userData) => {
            if (err) throw err;
            console.log(userData);
            const user = userData[0];
            res.render("edit", { user });


            // document.querySelector("")
        });
    } catch (err) {
        console.log("Error in the Database");
    }

});

app.patch("/user/:id", (req, res) => {
    const { id } = req.params;
    const { password: formPass, username: newUsername, email: newEmail } = req.body;
    const q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            const user = result[0];
            console.log(user);
            if (formPass != user.password) {
                res.send("Wrong Password, Try Again");
            } else {
                const q2 = `update user set username='${newUsername}', email='${newEmail}' where id='${id}'`;
                try {
                    if (err) throw err;
                    connection.query(q2, (err, result) => {
                        res.redirect("/user");
                    })
                } catch (err) {
                    console.log("Error in the database");
                }
            }

        })
    } catch (err) {
        console.log("Error in database");
    };
});

app.get("/user/new", (req, res) => {
    res.render("new");
})

app.post("/user", (req, res) => {
    const { username, email, password } = req.body;

    //     let createRandomUser = () => {
    //     return [
    //         faker.string.uuid(),
    //         faker.internet.username(),
    //         faker.internet.email(),
    //         faker.internet.password()
    //     ];
    // };

    const id = faker.string.uuid();

    const q = "insert into user (id, username, email, password) values (?, ?, ?, ?)";
    try {
        connection.query(q, [id, username, email, password], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        })

    } catch (err) {
        console.log("Error in Database");
    }
});

app.delete("/user/:id", (req, res) => {
    const { id } = req.params;

    const q = "delete from user where id=?";

    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        })
    } catch (err) {
        console.log("Error in Database");
    }

})



