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







