// Show an alert box on click on a link
function alertBox(){
    alert("")
}




function showAlertIphone(){
    alert("Thanks for purchasing a phone for us.")
}

function deletRow1(){
    var row1 = document.getElementById("row1")
    row1.innerHTML = "";
}

function deletRow2(){
    var row2 = document.getElementById("row2")
    row2.innerHTML = "";
}

function deletRow3(){
    var row3 = document.getElementById("row3")
    row3.innerHTML = "";
}

function deletRow4(){
    var row4 = document.getElementById("row4")
    row4.innerHTML = "";
}

//quetsiion 3
function changePic(img){
    img.src = "https://t2.tudocdn.net/698643?w=1200&h=1200"
}

function samePic(img){
    img.src = "https://media.wisemarket.com.pk/product/apple-iphone-16-pro-max-65.webp"
}


var counter = 0;
function increase(){
    var para = document.getElementById("para")
    para.innerHTML = counter++;
}

function decrease(){
    var para = document.getElementById("para")
    para.innerHTML = counter--;
}