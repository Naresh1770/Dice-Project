var randomNumbers1= Math.floor(Math.random() * 6) + 1;
var randomDiceImage= "dice" + randomNumbers1 + ".png";
var randomImageSource= "images/" + randomDiceImage;

var image1= document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImageSource);


 var randomNumbers2= Math.floor(Math.random() * 6) + 1;
var randomDiceImage2= "dice" + randomNumbers2 + ".png";
var randomImageSource2= "images/" + randomDiceImage2;

var image2= document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomImageSource2);


 if(randomNumbers1<randomNumbers2){
    document.querySelector("h1").innerHTML =  "Player 2 wins";
 }else if(randomNumbers1>randomNumbers2){
    document.querySelector("h1").innerHTML =  "Player 1 wins";
 }else{
    document.querySelector("h1").innerHTML =  "Draw"
 }