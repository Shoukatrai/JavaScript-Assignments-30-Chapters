// Write a program that displays current date and time in your browser.    
document.write(`<h1> TASK 01</h1>`)
var currentDate = new Date();
document.write(currentDate);

// Write a program that alerts the current month in words. For example December. 

alert(`${currentDate.toString().slice(0,3)}`);


// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
document.write(`<h1> TASK 03 </h1>`)
alert(`Today is ${currentDate.toString().slice(0,3)}`);
document.write(`Today is ${currentDate.toString().slice(0,3)}`)



//  Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
document.write(`<h1> TASK 04 </h1>`)
var now = new Date();
var day = now.toString().slice(0,3);
console.log(day);
if(day === "sat" || day === "sun"){
    document.write("Its fun day");
}else{
    document.write("Its working day");
}



// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
document.write(`<h1> TASK 05 </h1>`)
var firstNow = new Date().toLocaleDateString().slice(3,5);
console.log("firstNow",firstNow);
if(firstNow < 16){
    document.write("First fifteen days of the month.");
}else{
    document.write("Last days of the month.");
}



// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like to represent the Date object. 
document.write(`<h1> TASK 06 </h1>`);
var currentTime = new Date();
document.write(`curernt Time ${currentTime}`);
var miliseconds = currentTime.getTime();
document.write(`<br /> Elapsed miliseconds since jan 1, 1970:  ${miliseconds}`); 
document.write(`<br /> Elapsed minutes since jan 1, 1970:  ${miliseconds /(1000 *60)}`); 

// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
document.write(`<h1> TASK 07 </h1>`)
var amPm = new Date().toTimeString().slice(0,2);
if(amPm < 12){
    document.write("Its AM");
}else{
    document.write("Its PM");
}



// Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named laterDate. 
document.write(`<h1> TASK 08 </h1>`)
var laterDate = new Date("Dec 31,2020");
document.write(laterDate);


// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 
document.write(`<h1> TASK 09 </h1>`);

var dateObjectNow = new Date(); 
var Ramadan1stDate = new Date("June 18, 2015");

var dateObjectNowMiliseconds = dateObjectNow.getTime(); 
var Ramadan1stDateMiliseconds = Ramadan1stDate.getTime(); 

var diff = dateObjectNowMiliseconds - Ramadan1stDateMiliseconds;
var pastDays =Math.floor (diff /(1000 *60 *60 *24 *24));

document.write(`${pastDays} days have passed since 1st Ramadan, 2015`);


// Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the beginning of 2015.
document.write(`<h1> TASK 10 </h1>`)

var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500(PKT)");
// console.log("referenceDate", referenceDate); 
var beginingDate = new Date("Jan 01, 2015");


var referenceDateMiliseconds = referenceDate.getTime(); 
var beginingDateMiliseconds = beginingDate.getTime(); 

var difference =  referenceDateMiliseconds - beginingDateMiliseconds;   

var elapsedSeconds =Math.floor (difference /(1000 *60));

document.write(`${elapsedSeconds} days have passed since 1st Ramadan, 2015`);


// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.



var dateCurrent = new Date();






