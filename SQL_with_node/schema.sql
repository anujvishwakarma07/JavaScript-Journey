show databases;
use kitcollage;
show tables;

create table if not exists user (
    id int primary key,
    username varchar(20) unique,
    email varchar(30) unique not null,
    password varchar(20) not null
);


insert into user
(id, username, email, password)
values
(1, 'anuj01', 'anuj01@gmail.com', 'pass123'),
(2, 'rahul02', 'rahul02@gmail.com', 'pass123'),
(3, 'rohit03', 'rohit03@gmail.com', 'pass123'),
(4, 'amit04', 'amit04@gmail.com', 'pass123'),
(5, 'neha05', 'neha05@gmail.com', 'pass123'),
(6, 'priya06', 'priya06@gmail.com', 'pass123'),
(7, 'sonu07', 'sonu07@gmail.com', 'pass123'),
(8, 'monu08', 'monu08@gmail.com', 'pass123'),
(9, 'vikas09', 'vikas09@gmail.com', 'pass123'),
(10, 'deepak10', 'deepak10@gmail.com', 'pass123'),
(11, 'pooja11', 'pooja11@gmail.com', 'pass123'),
(12, 'kiran12', 'kiran12@gmail.com', 'pass123'),
(13, 'suman13', 'suman13@gmail.com', 'pass123'),
(14, 'nisha14', 'nisha14@gmail.com', 'pass123'),
(15, 'arjun15', 'arjun15@gmail.com', 'pass123'),
(16, 'meena16', 'meena16@gmail.com', 'pass123'),
(17, 'ravi17', 'ravi17@gmail.com', 'pass123'),
(18, 'komal18', 'komal18@gmail.com', 'pass123'),
(19, 'sachin19', 'sachin19@gmail.com', 'pass123'),
(20, 'alok20', 'alok20@gmail.com', 'pass123');


select * from user;