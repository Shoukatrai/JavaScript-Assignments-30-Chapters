// 01: Declare an empty array using JS literal notation to store student names in future.
document.write("<h1>Task 01 </h1>")
var stundentNames = [];
document.write(stundentNames);


// 03: Declare and initialize a strings array.
document.write("<h1>Task 03 </h1>")
var strArray = ["shouakt","ali","ahmad","ashraf"];
document.write(strArray);


// 04:  Declare and initialize a numbers array.
document.write("<h1>Task 04 </h1>")
var numArray = [3434,2423,22,24,2,234];
document.write(numArray);


// 05:  Declare and initialize a boolean array.
document.write("<h1>Task 05 </h1>")
var booleanArray = [true,false];
document.write(booleanArray);

// 06: . Declare and initialize a mixed array. 
var mixedArray = ["shoukat",132,2425,true,"pakistan"];


// 07: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
document.write("<h1>Task 07 </h1>");
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM"," MS"," M.Phil", "PhD"];
document.write("<br />" + "1) " + qualifications[0]);
document.write("<br />" + "2) " + qualifications[1]);
document.write("<br />" + "3) " + qualifications[2]);
document.write("<br />" + "4) " + qualifications[3]);
document.write("<br />" + "5) " + qualifications[4]);
document.write("<br />" + "6) " + qualifications[5]);
document.write("<br />" + "7) " + qualifications[6]);
document.write("<br />" + "8) " + qualifications[7]);



// 08: Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:  
document.write("<h1>Task 08 </h1>");
var namesOfStundents = ["Michel","John","Tony"];
var stundentScores = [320,230,480];
document.write("Score of " + namesOfStundents[0] + " is" + stundentScores[0] + ". Percentage: " + (stundentScores[0] / 500)*100 + "%");
document.write("<br />" + "Score of " + namesOfStundents[1] + " is" + stundentScores[1] + ". Percentage: " + (stundentScores[1] / 500)*100 + "%");
document.write("<br />" + "Score of " + namesOfStundents[2] + " is" + stundentScores[2] + ". Percentage: " + (stundentScores[2] / 500)*100 + "%");



// 09: Initialize an array with color names. Display the array elements in your browser.
document.write("<h1>Task 09 </h1>");
var colorNames = ["yellow","orange","green","white","black"];
document.write(colorNames);
        

// a) Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
document.write("<h1>task  a </h1>");
var beginningColor = prompt("What color do you want to add to the beginning of the array.");
colorNames.unshift(beginningColor);
// Display the updated array in your browser. 
document.write(colorNames);

// b) Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the updated array in your browser. 
document.write("<h1>task  b </h1>");
var endColor = prompt("What color do tou want to add to the end!");
colorNames.push(endColor);
document.write("<br />" + colorNames);


// c) Add two more color to the beginning of the array. Display the updated array in your browser. 
document.write("<h1>task  c </h1>");
var beginningColorOne = prompt("What color do you want to add to the beginning of the array.");
var beginningColorTwo = prompt("What color do you want to add to the beginning of the array.");
colorNames.unshift(beginningColorOne , beginningColorTwo);
document.write("<br />" + colorNames);


// d)  Delete the first color in the array. Display the updated array in your browser. 
document.write("<h1>task  d </h1>");
colorNames.shift();
document.write(colorNames);



// e) Delete the last color in the array. Display the updated array in your browser. 
document.write("<h1>task  e </h1>");
colorNames.pop();
document.write(colorNames);


// f) Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
// position/index. . Display the updated array in your browser.
document.write("<h1>task  f </h1>");
var indexNumAdd = prompt("At which index do you want to add a color.");
var userColorName = prompt("Which color do you want to add.");
colorNames.splice(indexNumAdd , 0 ,userColorName);
document.write(colorNames);

// g) Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//  Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
document.write("<h1>task  g </h1>");
var indexNumDel = prompt("At which index do you want to delete a color.");
var DelCountNum = prompt("How many colors do you want to delete.");
colorNames.splice(indexNumDel, DelCountNum);
document.write(colorNames);


// 10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method
document.write("<h1>task  10 </h1>");




// 11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("<h1>task  11 </h1>");
var cityNames = ["Karachi","Lahore","Islamabd","Quetta","Peshawar"];
var selectedCities = cityNames.slice(2,4);
document.write(selectedCities);


// 12:Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
document.write("<h1>task  12 </h1>");
var arr = ["This ",  "is ",  "my ",  "cat"];
document.write("'array'");
document.write("<br />" + arr);
var str = arr[0] + arr[1] + arr[2] + arr[3];
document.write("<br />" + "'string'");
document.write("<br />" + str);



// 13:  Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
document.write("<h1>task  13 </h1>");
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write(devices);
devices.shift();
document.write("<br />" + devices);








