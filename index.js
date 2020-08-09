var randomnumber1 = Math.floor((Math.random()*6)+1);
var randomimagesource1= "images/"+"dice" + randomnumber1+ ".png";

var randomnumber2 = Math.floor((Math.random()*6)+1);
var randomimagesource2 = "images/"+"dice" + randomnumber2+ ".png";
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src",randomimagesource1);
img2.setAttribute("src",randomimagesource2);


if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins! 🥳";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🥳";
}
else {
  document.querySelector("h1").textContent = "Draw! 🥺";
}
