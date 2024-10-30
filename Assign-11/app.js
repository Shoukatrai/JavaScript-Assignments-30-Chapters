// // 01: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
// // titled fullName. Greet the user using his full name. 

var firstName = prompt("Write your first name:");
var lastName = prompt("Write your last name:");
var fullName = `${firstName}  ${lastName}`;
alert(`Welcome ${fullName}`);

// // 02: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
document.write(`<h1> Taks 02 </h1>`)
var userPhone = prompt("Enter your phone model:");
var userPhoneLength = userPhone.length;
console.log(userPhoneLength);
document.write(`My favorite phone is: ${userPhone}`);
document.write(`<br /> Length of string is: ${userPhoneLength}`);


// // 03: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 
document.write(`<h1> Taks 03 </h1>`);
var str = "Pakistani";
var indexNum = str.indexOf("n");
document.write("string: " + str);
document.write("<br />" + "indexNum:  " + indexNum);

// // 04: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
document.write(`<h1> Taks 04 </h1>`);
var str1 = "Hello world";
var indexNum1  = str1.lastIndexOf("l");
document.write("string: " + str1);
document.write("<br />" + "indexNum:  " +indexNum1);


// // 05: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 
document.write(`<h1> Taks 05 </h1>`);
var charString = "Pakistani";
var charIndexNum  = charString.charAt(3);
document.write("string: " + charString);
document.write("<br />" + "indexNum:  " + charIndexNum);

// // 06:  Repeat Q1 using string concat() method. 

var firstName = prompt("Write your first name:");
var lastName = prompt("Write your last name:");
var fullName = firstName + " " + lastName;
alert("Welcome " + fullName);


// // 07: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
document.write(`<h1> Taks 07 </h1>`);
var cityName = "Hyderabad";
var cityNameChange = cityName.replace("Hyder","Islam");
document.write(cityNameChange);


// // 08: . Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
document.write(`<h1> Taks 08 </h1>`);
var replaceAllMethodStr = "Ali and Sami are best friends. They play cricket and football together.";
var replaceAllMethod = replaceAllMethodStr.replaceAll("and","&");
document.write(replaceAllMethod);


// // 09:  Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
document.write(`<h1> Taks 09 </h1>`);
var stringToNum = "472";
var stringConversion = Number(stringToNum);
document.write("Vlaue: " + stringToNum);
document.write("<br />" + "Type: " + typeof stringToNum);
document.write("<br />" + "Vlaue: " + stringToNum);
document.write("<br />" + "Type: " + typeof stringConversion);


// // 10: Write a program that takes user input. Convert and show the input in capital letters. 
document.write(`<h1> Taks 10 </h1>`);
var toUpperCaseStr = prompt("Enter any word to convert in capital letters:");
var upperCaseStr = toUpperCaseStr.toUpperCase();
document.write(upperCaseStr);


 
// // 11: Write a program that takes user input. Convert and show the input in title case. 
document.write(`<h1> Taks 11 </h1>`);
var toLowerCaseStr = prompt("Enter any word to convert in lower letters:");
var lowerCaseStr = toLowerCaseStr.toLowerCase();
document.write( lowerCaseStr );

// // 12: Write a program that converts the variable num to string. 
document.write(`<h1> Taks 12 </h1>`);

var num = 35.36;
var numStr = String(num); //convert to string:
var removeDot = numStr.replace(".", "");
document.write(`num:  ${num}`);
document.write(`<br /> result:  ${removeDot}`);



// 13: Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
document.write(`<h1> Taks 13 </h1>`);









// // 14: You have an array 
// // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// // Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given 
// // item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program 
// // should inform about its availability. Example: 
var fruits = ["cake", "apple", "pie", "cookie", "chips", "patties"];
var usreInput = prompt("Welcome to ABC Bakery. What do you want to order \n sir/ma'am").toLowerCase();
var indexFruits = fruits.indexOf(usreInput);

if(indexFruits !== -1){
    alert(`${usreInput} is  available at index ${indexFruits} in our Bakery`);
}else{
    alert(`We are sorry. ${usreInput} is not available in our bakery`)
}




// // Write a program to take password as an input from user. The password must qualify these requirements: 
// // a. It should contain alphabets and numbers 
// // b. It should not start with a number 
// // c. It must at least 6 characters long 
// // If the password does not meet above requirements, prompt the user to enter a valid password. 
// // For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 
document.write(`<h1> Taks 15 </h1>`);
// var userPassword = prompt("Enter your password");
// var result = userPassword.charCodeAt(0);
// console.log(result);





// // 16: Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; 
// // Display the elements of array in your browser. 
document.write(`<h1> Taks 16 </h1>`);
var university = "university of Karachi";
for(var i = 0; i < university.length; i++){
    document.write(`<br />  ${university [i]}  `);
}


// // 17;Write a program to display the last character of a user input.
document.write(`<h1> Taks 17 </h1>`);
var Pakistan  = "Pakistan";
document.write(`<br /> ${Pakistan[7]}`); 

// 18: You have a string “The quick brown fox jumps over thelazy dog”. Write a program to count number ofoccurrences of word “the” in given string.
// var foxString = "The quick brown fox jumps over the lazy dog";
// var wordCount = foxString.matchAllatchAll(/the/gi);
// console.log("wordCount", wordCount);
// console.log(wordCount);
