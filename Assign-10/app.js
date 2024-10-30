// 03: Write a program to print numeric counting from 1 to 10

document.write("<h1>Task 01 </h1>");
for(var i = 1; i <= 10; i++){
    document.write("<br />" + i);
}


// 04: Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user. 
document.write("<h1>Task 02 </h1>");
var tableNumber = prompt("Enter an number to show its multiplication table:");
var tableLength = prompt("Enter length  multiplication table:");
for(var i = 1; i <= tableLength; i++){
    document.write("<br />" + i + " x " + tableNumber + " = " + i * tableNumber);
}



// 05: Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
document.write("<h1>Task 03 </h1>");
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i < fruits.length; i++){
    document.write("<br />" + fruits[i]);
}
 
for(var i = 0; i < fruits.length; i++){
    document.write("<br />" + "Element at index "+ i + " "+ fruits[i]);
}

// 06: Generate the following series in your browser. See example output. 
    // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
document.write("<h1>Task 04(a- counting) </h1>");
for(var i = 1; i <= 15; i++){
    document.write(i + ", ");
}
    // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 

document.write("<h1>Task 04(b -reverse counting) </h1>");
for(var i = 10; i >= 1; i--){
    document.write(i + ", ");
}
    // c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write("<h1>Task 04(c- even) </h1>");
for(var i = 1; i <= 20; i++){
    if(i % 2 == 0){
        document.write(i + ", ");
    }
}

    // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h1>Task 04(d- odd) </h1>");
for(var i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        document.write(i + ", ");
    }
}
    
    // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h1>Task 04(e- Series) </h1>");
for(var i = 1; i <= 20; i++){
    if(i % 2 == 0){
        document.write(i + "k, ");
    }
}

// 07: You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Example: 
document.write("<h1>Task 05</h1>");
var flag = "false";
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchFood = prompt("Welcom to ABC Bakery. What do you want to order sir/ma'am?", "cake");
for(var i = 0; i < A.length; i++){
    if(A[i] === searchFood){
        flag = "true";
        alert(`${searchFood } is availabe at index  ${A[i]}   in our bakkery`);
    }
} 

if(flag == "false"){
    alert(`We are soory. ${searchFood} is not available in our bakkery.`);
}


// 08: Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12].
document.write("<h1>Task 06</h1>");
// var largestNbrArr= [24, 53, 78, 91, 12];
// var largest = largestNbrArr[0];
// for(var i = 0; i < largestNbrArr.length; i++){
//     if(largest <largestNbrArr[i]){
//         largest = largestNbrArr[i];
//     }
// }
// document.write("Array items: ", largestNbrArr);
// document.write("<br />" + "The largest nbr is: ", largest);
var largest = Math.max(24, 53, 78, 91, 12);
document.write(largest);


// 09: Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12] 
document.write("<h1>Task 07</h1>");
// var smallestNbrArr= [24, 53, 78, 91, 12];
// var smallest = smallestNbrArr[0];
// for(var i = 0; i < smallestNbrArr.length; i++){
//     if(smallest > smallestNbrArr[i]){
//         smallest = smallestNbrArr[i];
//     }
// }
// document.write("Array items: ", smallestNbrArr);
// document.write("<br />" + "The smallest nbr is: ", smallest);
var smallest = Math.min(24, 53, 78, 91, 12);
document.write(smallest);


// 10: Write a program to print multiples of 5 ranging 1 to 100. 
document.write("<h1>Task 08</h1>");
for(var i = 0; i <= 100; i = i+5){
    document.write(i + ", ");
}





