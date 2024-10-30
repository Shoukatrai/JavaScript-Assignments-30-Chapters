// Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number  
document.write(`<h1> TASK 01 </h1>`)

var userNumber = prompt("Please enter any positive integer number:");
document.write(`Number: ${userNumber}`);
document.write(`<br /> Round off value: ${Math.round(userNumber)}`);
document.write(`<br /> Floor value: ${Math.floor(userNumber)}`);
document.write(`<br /> Ceil value: ${Math.ceil(userNumber)}`);

// Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number
document.write(`<h1> TASK 02 </h1>`)

var userNegativeNumber = prompt("Please enter any negative integer number:");
document.write(`Number: ${userNegativeNumber}`);
document.write(`<br /> Round off value: ${Math.round(userNegativeNumber)}`);
document.write(`<br /> Floor value: ${Math.floor(userNegativeNumber)}`);
document.write(`<br /> Ceil value: ${Math.ceil(userNegativeNumber)}`);



// Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
document.write(`<h1> TASK 03 </h1>`);

var absNumber = prompt("Enter any number to check its absolute value:");
document.write(`The absolute value of ${absNumber} is ${Math.abs(absNumber)}`);


// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
document.write(`<h1> TASK 04 </h1>`);
document.write(`Random dice value: ${Math.ceil(Math.random() *6 )}`);
document.write(`<br /> Random dice value: ${Math.ceil(Math.random() *6 )}`);



// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
document.write(`<h1> TASK 05 </h1>`);
var randomCoin =Math.ceil( Math.random()*2);
if(randomCoin === 2){
    document.write(`${randomCoin} <br /> Random coin value: Head`);
}else if(randomCoin === 1){
    document.write(`${randomCoin} <br /> Random coin value: Tail`);
}   


// Write a program that shows a random number between 1 and 100 in your browser.
document.write(`<h1> TASK 06 </h1>`);
var randomNbr = Math.ceil(Math.random() *100 );
document.write(`random number between 1 and 100: ${randomNbr}`);


// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms
document.write(`<h1> TASK 07 </h1>`);
// var userWeight = prompt("Enter your weight:");

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret number, congratulate the user. 
document.write(`<h1> TASK 08 </h1>`);

var secretNbr = Math.ceil(Math.random() *10 );
var guessNbr = prompt("Guess any number between 01 and 10:");
if(guessNbr === secretNbr){
    document.write(`Congratulation sir!`);
}else{
    document.write("Try Again");
}










