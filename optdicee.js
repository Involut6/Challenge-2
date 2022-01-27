// Player1 dice
var num1 = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + num1 + ".png";
document.querySelector(".img1").setAttribute("src", image1);

// Player2 dice
var num2 = Math.floor(Math.random() * 6) + 1;
var image2 = "images/dice" + num2 + ".png";
document.querySelector(".img2").setAttribute("src", image2);

// Dice result message
if (num1 > num2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (num1 < num2) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
