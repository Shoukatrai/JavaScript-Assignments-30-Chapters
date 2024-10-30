for(var i = 1; i <= 3; i++){
    for(var j = 1; j <= 2; j++){
        console.log(i*j);
    }
}


// 01: Declare 3 variables in one statement.

var i =1, j=2, k=3;
console.log(i);
console.log(j);
console.log(k);

// 02: Declare 5 legal & 5 illegal variable names.
// legal variables
var myVar;
var abc;
var i;
var userName;
var cityName;

// Illegal variable
// var 1stVar;
// var 123abc;
// var user-name;
// var var;
// var @name;

// 03: Display this in your browser .
    // a)  A heading stating “Rules for naming JS variables”
document.write("<h1>Rules for naming JS variables</h1>");
    // b)Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable 
document.write("<br />" + "Variable names can only contain numbers,$ and _. For example: $my_1stVariable");
document.write("<br />" + "Variable must begin with a letter,$ or _.For example: $name, _name or name");
document.write("<br />" + "Variable names are case sensitive");
document.write("<br />" + "Variable names should not be JS keywords");
