// Write a function that displays current date & time in your browser.
function date(){
    document.write("<h1>TASK 01 </h1>")
    document.write(new Date())
}
// date();

// Write a function that takes first & last name and then it greets the user using his full name.
function greet(){
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    alert(`${firstName} ${lastName} Welcom sir!`);
}
// greet();



// Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function sum(){
    var number1 = +prompt("Enter number one:");
    var number2 = +prompt("Enter number two:");
    var sum = alert(number1 + number2);
}
// sum();




// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and 
// show the desired result in your browser. 
function calculator(){
    var number1 = +prompt("Enter number one:");
    var number2 = +prompt("Enter number two:");
    var operator = prompt("Enter math operator:");

    if(operator === "+"){
        alert(number1 + number2);
    }else if(operator === "-"){
        alert(number1 - number2);
    }else if(operator === "*"){
        alert(number1 * number2);
    }else if(operator === "/"){
        alert(number1 / number2);
    }else{
        alert("Invalid input!");
    }
}
// calculator();


// Write a function that squares its argument.
function square(){
    var number = prompt("Enter a number to square:");
    alert(number * number);
}
// square();

// Write a function that computes factorial of a number.
// function factorial(){
//     var number  = prompt("Enter number to find its factorial:");
//     if(number < 0){
//         alert("Enter Positive intiger:");
//     }else{
//         alert(number * number(number-1))
//     }
// }

// factorial();

// Write a function that take start and end number as inputs& display counting in your browser.
function count(){
    var startNbr = prompt("Enter starting nbr:");
    var endNbr = prompt("Enter ending nbr:");
    for(var i = startNbr; i <= endNbr; i++){
        document.write(`<br /> ${i}`);
    }
}
// count();


// 09:  Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables
document.write("<h1>TASK 09</h1>")
function area(width, height){
    var area = width * height;
    document.write(area);
}
// area(100,100);

// 11: Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT:  'The Quick Brown Fox'
document.write("<h1>TASK 11</h1>")
function conversion(string = "the quick brown fox"){
var word1 = string.charAt(0).toUpperCase();
var word2 = string.charAt(4).toUpperCase();
var word3 = string.charAt(10).toUpperCase();
var word4 = string.charAt(16).toUpperCase();
// document.write(word1, word2, word3, word4);
document.write("Output: " + word1 + string.slice(1,3) + " " + word2 + string.slice(5,9)+ " " + word3 + string.slice(11,15)+ " " + word4 + string.slice(17));    
}

conversion();












