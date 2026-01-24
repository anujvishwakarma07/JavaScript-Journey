const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "kitcollage",
  password: "Bitto"
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    // avatar: faker.image.avatar(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  ];
};

let q = "insert into user (id, username, email, password) values ?";
let data = [];

for(let i = 0; i <= 95; i++){
  data.push(createRandomUser());
}



try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();



// console.log(createRandomUser());

