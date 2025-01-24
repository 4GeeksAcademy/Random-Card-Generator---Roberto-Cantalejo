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

window.onload = function() {
  //write your code here

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
