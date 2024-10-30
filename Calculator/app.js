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