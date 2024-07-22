
var randomNumber1 = Math.floor(Math.random() * 3) + 1;

var randomDiceImage = "left" + randomNumber1 + ".png";

var randomImageSrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);



var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSrc2 = "images/right" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Again!";
}

