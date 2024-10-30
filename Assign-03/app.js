// 01:  Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 21;
alert("I am " + age + " years old");

// 02: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her 
// number of visits on your web page. For example: “You have visited this site N times”.
var track = "You have visited this site 10 times";
alert(track);

// 03: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// var birthYear;
var birthYear = 2004;
document.write("<h1>Task 03 </h1>");
document.write("My birth year is " + birthYear);
document.write("<br />" + "Data type of my declared variable is number");

// 04:  A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”
document.write("<h1>Task 04 </h1>");
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;
document.write("\n"  + visitorName + " ordered " + quantity +" "+ productTitle + " on XYZ Clothing store.");