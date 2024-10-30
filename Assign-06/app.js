// document.write("<h1>Assignment 06</h1>")

// 01: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
document.write("<h1>Taks 01</h1>");
var number = prompt("Enter number:");
document.write("The value of number is: " + number);

++number;
document.write("<br />" + "The value of ++number is: " + number);
document.write("<br />" + "Now the value of number is: " + number);

number++;
document.write("<br />" + "The value of number++ is: " + number);
document.write("<br />" + "Now the value of number is: " + number);

--number;
document.write("<br />" + "The value of --number is: " + number);
document.write("<br />" + "Now the value of number is: " + number);

number--;
document.write("<br />" + "The value of number-- is: " + number);
document.write("<br />" + "Now the value of number is: " + number);


// 02: What will be the output in variables a, b & result after execution of the following script:
document.write("<h1>Taks 02</h1>");
var a = 2;
var b = 1;
var result = --a - --b + ++b +b--;
document.write(result);

--a;
document.write("<br />" + a);
--b;
document.write("<br />" + b);
var result = --a - --b;
document.write("<br />" + result);
var result = --a - --b + ++b;
document.write("<br />" + result);
var result = --a - --b + ++b + b--;
document.write("<br />" + result);


// 03: Write a program that takes input a name from user & greet the user.
document.write("<h1>Taks 03</h1>");
var userName = prompt("Enter your name:");
var greetMsg = alert("Good Morning " + userName);


// 04: Write a program to take input a number from user & display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<h1>Taks 04</h1>");
var inputNumber = prompt("Enter a number to generate table:",5);
document.write("1 x " + inputNumber + " = " + inputNumber * 1);
document.write("<br />" + "2 x " + inputNumber + " = " + inputNumber * 2);
document.write("<br />" + "3 x " + inputNumber + " = " + inputNumber * 3);
document.write("<br />" + "4 x " + inputNumber + " = " + inputNumber * 4);
document.write("<br />" + "5 x " + inputNumber + " = " + inputNumber * 5);
document.write("<br />" + "6 x " + inputNumber + " = " + inputNumber * 6);
document.write("<br />" + "7 x " + inputNumber + " = " + inputNumber * 7);
document.write("<br />" + "8 x " + inputNumber + " = " + inputNumber * 8);
document.write("<br />" + "9 x " + inputNumber + " = " + inputNumber * 9);
document.write("<br />" + "10 x " + inputNumber + " = " + inputNumber * 10);

// 6. Take 
//      a) Take three subjects name from user and store them in 3 different variables. 
document.write("<h1>Taks 05</h1>");
var subjectOne = prompt("Enter Subject name:");
var subjectTwo = prompt("Enter Subject name:");
var subjectThree = prompt("Enter Subject name:");
//       b) Total marks for each subject is 100, store it in another variable.
var SubejctTotalMarks = 100;
//       c)Take obtained marks for first subject from user and stored it in different variable.
var subjectOneMarks = prompt("Enter subject one marks:");
//      d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var subjectTwoMarks = prompt("Enter subject two marks:");
var subjectThreeMarks = prompt("Enter subject three marks:");

document.write("<br />" +  "Subject  Total Marks  Obtained Marks  Percentage");
document.write("<br />" +  subjectOne +" " + SubejctTotalMarks + "    " + subjectOneMarks + "     " + (subjectOneMarks / SubejctTotalMarks)*100 + "%");
document.write("<br />" + subjectTwo +" " + SubejctTotalMarks + "    " + subjectTwoMarks + "     " + (subjectTwoMarks / SubejctTotalMarks)*100 + "%");
document.write("<br />" + subjectThree +" " + SubejctTotalMarks + "    " + subjectThreeMarks + "     " + (subjectThreeMarks / SubejctTotalMarks)*100 + "%");