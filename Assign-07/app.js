// 01: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter your city name:");
if(city == "Karachi"){
    alert("Welcome to city of Lights")
}

// 02:  Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am. 

var gender = prompt("Enter your gender!");
if (gender === "male") {
   alert("Good Morning Sir.");
}
if (gender === "female") {
   alert("Good Morning Ma’am.");
}


// 03: Write a program to take input color of road traffic signal from the user & show the message according to this table: 

var color = prompt("Enter color of traffic signal.")
if (color === "red") {
   alert("Must stop");
}
if (color === "yellow") {
   alert("Ready to move");
}
if (color === "green") {
   alert("move now");
}

// 04: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var remainingFuel = prompt("Enter remaninig fuel in your car!");
if(remainingFuel < 0.25){
    alert("Please refill the fuel in your car")
}

// 05: Run this script, & check whether alert message would be displayed or not. Record the outputs. 
document.write("<h1>Script 01</h1>");
//script 01
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}
document.write("given condition for variable a is true");

document.write("<h1>Script 02</h1>");
 
//script 02
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
document.write("No output");


//script 03
document.write("<h1>Script 03</h1>");
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
    } 
    if (++c < 14){ 
    alert("condition 3 is true"); 
    } 
    if(c === 14){ 
    alert("condition 4 is true"); 
    }
document.write("<br />" + "condition 2 is true");
document.write("<br />" + "condition 4 is true");

//script 04
document.write("<h1>Script 04</h1>");
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}
document.write("<br />" + "The cost equals")

//script 05
document.write("<h1>Script 05</h1>");
if (true){ 
    alert("True"); 
    } 
    if (false){ 
    alert("False"); 
    }
document.write("True");

//script 06
document.write("<h1>Script 06</h1>");
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    } 
document.write("car is smaller than cat");


// 06: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as per following table:

var obtainedMarks = prompt("Enter your obtained marks!");
var totalMarks = prompt("Enter total marks!");
var percentageGrade = (obtainedMarks / totalMarks)*100;
console.log(percentageGrade);
if(percentageGrade >= 80){
    alert("A-one");
    alert("Excellent");
}else if(percentageGrade >= 70){
    alert("A");
    alert("Good");
}else if(percentageGrade >= 60){
    alert("B");
    alert("You need to improve.");
}else if(percentageGrade < 60){
    alert("Fail");
    alert("Soory");
}

document.write("<h1>Question 06</h1>");
document.write("Total Marks: " + totalMarks);
document.write("<br />" + "Obtained Marks: " + obtainedMarks);
document.write("<br />" + "Percentage: " + percentageGrade);
