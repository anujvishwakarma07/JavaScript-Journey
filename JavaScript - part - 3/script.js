//String Methods

//Trim Method - It only removes whitespace from the beginning and end of a string.
//It does not remove whitespace in between the string.
//it creates a new string and does not change the original string.
let str = "   Hello World!   ";
console.log(str.trim()); // "Hello World!"

//ToLowerCase Method - It converts the entire string to lowercase letters.
let str1 = "Hello World!";  
console.log(str1.toLowerCase()); // "hello world!"

//ToUpperCase Method - It converts the entire string to uppercase letters.
let str2 = "Hello World!";  
console.log(str2.toUpperCase()); // "HELLO WORLD!"

//indexOf Method - It returns the index of the first occurrence of a specified value in a string.
let str3 = "Hello World!";      
console.log(str3.indexOf("o")); // 4
console.log(str3.indexOf("l")); // 2

//Method Chaining - It is a technique in which multiple methods are called on the same object in a single line of code.
let str4 = "   Hello World!   ";
console.log(str4.trim().toLowerCase().indexOf("o")); // 4   
//Here, we first trim the string, then convert it to lowercase, and finally find the index of "o".

//slice Method - It extracts a section of a string and returns it as a new string.
//It takes two parameters: the starting index and the ending index (not included).
let str5 = "Hello World!";  
console.log(str5.slice(0, 5)); // "Hello"
console.log(str5.slice(6)); // "World!"
console.log(str5.slice(-6)); // "World!" (negative index starts from the end)
console.log(str5.slice(0, -6)); // "Hello " (up to but not including the last 6 characters)

//replace Method - It replaces a specified value with another value in a string.
//It takes two parameters: the value to be replaced and the value to replace it with.   
let str6 = "Hello World!";  
console.log(str6.replace("World", "JavaScript")); // "Hello JavaScript!"
console.log(str6.replace("o", "a")); // "Hella World!" (only replaces the first occurrence)
console.log(str6.replace(/o/g, "a")); // "Hella Warld!" (replaces all occurrences using regex)

//repeat Method - It repeats a string a specified number of times and returns a new string.
let str7 = "Hello! ";   
console.log(str7.repeat(3)); // "Hello! Hello! Hello! "
console.log("abc".repeat(2)); // "abcabc"

//Practice Problems

let msg = "help!";
console.log(msg.trim().toUpperCase()); // "HELP!"

let name = "ApnaCollage";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));


// question 2

let start = ['january', 'july', 'march', 'august'];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);


//using unsplice 
let months = ['january', 'july', 'march', 'august'];
months.splice(0, 2, "june", "july");
console.log(months);

let languages = ["c", "c++", "html", "javascript", "python" ," java", "c#", "sql"];
let ans = languages.reverse().indexOf("javascript");
console.log(ans);






