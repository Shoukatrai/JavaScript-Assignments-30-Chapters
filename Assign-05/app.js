// 01: Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
document.write("<h1>Task 01 </h1>");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("sum of 3 and 5 is ",sum);

// 02: Repeat task1 for subtraction, multiplication, division & modulus. 
// subtarction
document.write("<h1>Task 01 (subtarction) </h1>");
var num1 = 3;
var num2 = 5;
var sum = num1 - num2;
document.write("<br />" + "subtraction of 3 and 5 is ",sum);

// multiplication
document.write("<h1>Task 01 (multiplication) </h1>");
var num1 = 3;
var num2 = 5;
var sum = num1 * num2;
document.write("<br />" + "multiplication of 3 and 5 is ",sum);


//division
document.write("<h1>Task 01 (division) </h1>");
var num1 = 3;
var num2 = 5;
var sum = num1 / num2;
document.write("<br />" + "division of 3 and 5 is ",sum);

// modoulus
document.write("<h1>Task 01 (modulus) </h1>");
var num1 = 3;
var num2 = 5;
var sum = num1 % num2;
document.write( "<br />" + "modulus of 3 and 5 is ",sum); 


// 03: Do the following using JS Mathematic Expressions
document.write("<h1>Task 03</h1>");
    // a)  Declare a variable. 
var mathExpression;
    // b) Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("<br />" + "Value after variable declaration is: " + mathExpression);
    // c) Initialize the variable with some number. 
mathExpression = 5;
    // d) . Show the value of variable in your browser like “Initial value: 5”.
document.write("<br />" + "Initial value: " + mathExpression); 
    // e)  Increment the variable.
mathExpression ++;
    // f) Show the value of variable in your browser like “Value after increment is: 6”.
document.write("<br />" + "Value after increment is: " + mathExpression);
    // g) Add 7 to the variable. 
mathExpression += 7;
    // h) Show the value of variable in your browser like “Value after addition is: 13”.
document.write("<br />" + "Value after addition is: " + mathExpression);
    // i)  Decrement the variable. 
mathExpression--;
    // j) Show the value of variable in your browser like “Value after decrement is: 12”. 
// document.write("<br />" + "Value after decrement is: " + mathExpression);
    // k)  Show the remainder after dividing the variable’s value by 3 .
mathExpression %= 3;
    // l)  Output : “The remainder is : 0”. 
document.write("<br />" + "Output : The remainder is : " + mathExpression)


/* 04: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 
tickets to a movie. Example output:*/
document.write("<h1>Task 04</h1>")
var ticketPrice = 600 ;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets ;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");


// 05: Write a script to display multiplication table of any number in your browser. E.g
document.write("<h1>Task 05</h1>");
document.write("4 x 1 = " + 4*1);
document.write("<br />" + "4 x 2 = " + 4*2);
document.write("<br />" + "4 x 3 = " + 4*3);
document.write("<br />" + "4 x 4 = " + 4*4);
document.write("<br />" + "4 x 5 = " + 4*5);
document.write("<br />" + "4 x 6 = " + 4*6);
document.write("<br />" + "4 x 7 = " + 4*7);
document.write("<br />" + "4 x 8 = " + 4*8);
document.write("<br />" + "4 x 9 = " + 4*9);
document.write("<br />" + "4 x 10 = " + 4*10);  


// 06: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    //   a) Store a Celsius temperature into a variable.
    document.write("<h1>Task 06</h1>");
    var celsius = 25; 
//   b) Convert it to Fahrenheit & output “NNoC is NNoF”.
var celsiusToFahrenheit = (celsius * 9/5) + 32;
// document.write("25 Celsius is " + celsiusToFahrenheit + " Fahrenheit");
    //   c) Now store a Fahrenheit temperature nto a variable.
var fahrenheit = 70; 
    //   d)  Convert it to Celsius & output “NNoF is NNoC”.
var fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
document.write("<br />" + "70 fahrenheit is " + fahrenheitToCelsius + " Celsius");


// 07: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
document.write("<h1>Task 07</h1>");
var priceItem1 = 650;
var priceItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;
var totalCostOfOrder = shippingCharges + (priceItem1 * quantityOfItem1) + (priceItem2 * quantityOfItem2);


document.write("Price of item 1 is " + priceItem1);
document.write("<br />" + "Quantity of item 1 is " + quantityOfItem1);
document.write("<br />" + "Price of item 2 is " + priceItem2);
document.write("<br />" + "Quantity of item 2 is " + quantityOfItem2);
document.write("<br />" + "Shipping charges are " + shippingCharges);
document.write("<br />" + "Total cost of your order is " + totalCostOfOrder);


// 08: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
document.write("<h1>Task 08</h1>");
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = obtainedMarks / totalMarks * 100;
document.write(percentage);
document.write("Total Marks: " + totalMarks);
document.write("<br />" + "Obtained Marks: " + obtainedMarks);
document.write("<br />" + "Percentage: " + percentage);

// 09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h1>Task 09</h1>");
var usDollars = 10;
var riyal = 25;
var totalCurrency = (usDollars * 104.80) + (riyal * 28);
document.write("Total currency  in PKR: " + totalCurrency);

// 10: Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//   a. Add 5 
//   b. Multiply by 10 
//   c. Divide the result by 2 
//    Perform all calculations in a single expression
document.write("<h1>Task 10</h1>");
var number = 20;
var answer = ((number + 5) * 10) / 2;
document.write(answer);

// 11: The Age Calculator: Forgot how old someone is? Calculate it! 
//   a. Store the current year in a variable. 
//   b. Store their birth year in a variable. 
//   c. Calculate their 2 possible ages based on the stored values.
document.write("<h1>Task 11</h1>");
var currentYear = 2024;
var birthYear = 2004;
var age = currentYear - birthYear;
document.write(age);

// 12. The Geometrizer: Calculate properties of a circle. 
//        a. Store a radius into a variable.
document.write("<h1>Task 12</h1>");
var radius = 20;
//        b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("Radius of circle is: " + radius);
document.write("<br />" + "The circumference is: " + circumference);
document.write("<br />" + "The area is: " + area);


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
//   a. Store your favorite snack into a variable 
//   b. Store your current age into a variable. 
//   c. Store a maximum age into a variable. 
//   d. Store an estimated amount per day (as a number). 
//   e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write("<h1>Task 13</h1>");
var favoriteSnack = "choclate chip";
var myCurrentAge = 15;
var maxAge = 65;
var amountPerDaySnacks = 3;
var totalSnacks = (amountPerDaySnacks * 365) * (maxAge - myCurrentAge);

document.write("Favorite Snack: " + favoriteSnack);
document.write("<br />" + "Current Age: " + myCurrentAge);
document.write("<br />" + "Estimated maximum age: " + maxAge);
document.write("<br />" + "Amount of snacks per day: " + amountPerDaySnacks);
document.write("<br />" + "You will need " + totalSnacks + " " + favoriteSnack +" to last you until the ripe old age of " + maxAge);