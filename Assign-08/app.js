// Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
document.write("<h1>Question 01</h1>");
var character = prompt("Enter any character ");
var result = character.charCodeAt(0);
if(result >= 65 && result <= 90){
    document.write("The character is uppercase.");
}else if(result >= 97 && result <= 122){
    document.write("The character is lowercase.");
}else if(result >= 48 && result <= 57){
    document.write("The character is number.");
}else{
    document.write("The input character is not a number or letter.");
}


// 02: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
document.write("<h1>Question 02</h1>");
var num1 = prompt("Enter number one.");
var num2 = prompt("Enter number two.");
if(num1 > num2){
    document.write("<br />" + num1);
}else if(num2 > num1){
    document.write("<br />" + num2);
}else{
    document.write("The " + num1 + " and " + num2 + " are equal.");
}


// 03: Write a program that takes input a number from user & state whether the number is positive, negative or zero.
document.write("<h1>Question 03</h1>");
var checksNumber = prompt("Enter a number and check whether the number is positive, negative or zero.");
if(checksNumber > 0){
    document.write("<br />" + checksNumber + " is a positive number");
}else if(checksNumber < 0){
    document.write("<br />" + checksNumber + " is a negative number");
}else if(checksNumber == 0){
    document.write("<br />" + checksNumber + " is Zero");
}else{
    document.write("<br />" + "Invalid Input");
}


// 04: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
document.write("<h1>Question 04</h1>");
var inputCharacter = prompt("Enter a character/string of length 01:");
if(inputCharacter == "a" || inputCharacter == "e" || inputCharacter == "i" || inputCharacter == "o" || inputCharacter == "u"){
    document.write("<br />" + "True");
}else{
    document.write("<br />" + "False");
}

// 05: Write a program that 
// a. Store correct password in a JS variable. 
    // b.  Asks user to enter his/her password 
    // c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you 
// entered matches the original password”. Show “Incorrect password” otherwise.
document.write("<h1>Question 05</h1>");
var correctPassword = "pakistan123";
var password = prompt("Enter your password:");
if(password === ""){
    document.write("<br />" + "Please enter your password:");
}else if(correctPassword === password){
    document.write("<br />" + "Correct! The password you entered matches the original password");
}else{
    document.write("<br />" + "Incorrect password");
}

// 06:This if/else statement does not work. Try to fix it: 
document.write("<h1>Question 06</h1>");
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }

var greeting; 
var hour = 13; 
if(hour < 18){ 
    greeting = "Good day"; 
}else{ 
    greeting = "Good evening"; 
}
document.write("<br />" + greeting);


// 07: Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
document.write("<h1>Question 07</h1>");

var currentTime = prompt("Enter current time in 24 time Format!");
if(currentTime >= 0 && currentTime < 12){
    document.write("<br />" + "Good morning!");
}else if(currentTime >= 12 && currentTime < 17){
    document.write("<br />" + "Good AfterNoon!");
}else if(currentTime >= 17 && currentTime < 21){
    document.write("<br />" + "Good Evening!");
}else if(currentTime >= 21 && currentTime <= 23){
    document.write("<br />" + "Good Night!");
}else{
    document.write("<br />" + "Invalid input");
}