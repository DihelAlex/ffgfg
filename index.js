var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImageSource2 = "dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
} else if (randomNumber1 = randomNumber2) {
  document.querySelector("h1").innerHTML = "🎌 Draw!";
}
