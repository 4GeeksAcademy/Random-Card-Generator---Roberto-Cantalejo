/* eslint-disable */
import "./style.css";

import "./assets/img/poker-hand.ico";

let upperSuit = document.querySelector("#upper-suit");
let lowerSuit = document.querySelector("#lower-suit");
let suits = [upperSuit, lowerSuit];
let randomNumber = document.querySelector("#random-number");
function randomSuitNumber() {
  return Math.floor(Math.random() * 4);
}
let suitValue = randomSuitNumber();
function randomCardValue() {
  return Math.floor(Math.random() * 13);
}
let cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let chosenCardValue = cardValues[randomCardValue()];

window.onload = function() {
  //write your code here
  randomNumber.innerText = chosenCardValue;
  suits.forEach(suit => {
    suit.innerText = suitValue;
    if (suit.innerText == 0) {
      suit.innerText = "♠";
    } else if (suit.innerText == 1) {
      suit.innerText = "♥";
      suit.style.color = "red";
    } else if (suit.innerText == 2) {
      suit.innerText = "♣";
    } else if (suit.innerText == 3) {
      suit.innerText = "♦";
      suit.style.color = "red";
    }
  });
};
