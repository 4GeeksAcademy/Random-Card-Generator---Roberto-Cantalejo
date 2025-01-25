/* eslint-disable */
import "./style.css";

import "./assets/img/poker-hand.ico";

// Asigno a variables los objetos de palo y figura/número en el HTML //

let randomNumber = document.querySelector("#random-number");
let suits = [
  document.querySelector("#upper-suit"),
  document.querySelector("#lower-suit")
];

// Creo dos funciones para randomizar las posibilidades de palos y figuras/números. Creo una variable con todas las posibles figuras/números //
function randomSuitNumber() {
  return Math.floor(Math.random() * 4);
}

function randomCardValue() {
  return Math.floor(Math.random() * cardValues.length);
}
const cardValues = [
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

// Creo la función para generar la carta //

function generateCard() {
  // Asigno los valores randomizados a dos variables y asigno el de la figura/número a su HTML //
  let suitValue = randomSuitNumber();
  let chosenCardValue = cardValues[randomCardValue()];

  randomNumber.innerText = chosenCardValue;

  // Creo un if que afecte al mismo tiempo a los dos símbolos de la carta, asignando cada símbolo a un número y cambiando el color dependiendo de que símbolo sea //

  suits.forEach(suit => {
    suit.innerText = suitValue;
    if (suit.innerText == 0) {
      suit.innerText = "♠";
      suit.style.color = "black";
    } else if (suit.innerText == 1) {
      suit.innerText = "♥";
      suit.style.color = "red";
    } else if (suit.innerText == 2) {
      suit.innerText = "♣";
      suit.style.color = "black";
    } else if (suit.innerText == 3) {
      suit.innerText = "♦";
      suit.style.color = "red";
    }
  });
}

// Llamo a la función de generar carta al cargar la página //

window.onload = function() {
  generateCard();
};

// Tarea extra nº1: Creo un botón para cambiar de carta al hacer click //

let balatroButton = document.querySelector("#balatro-button");

balatroButton.addEventListener("click", () => generateCard());

//Tarea extra nº2: Pongo un temporizador de 10 segundos para que se vayan cambiando las cartas //

setInterval(generateCard, 10000);

// Esta parte asocia el ancho y alto de la carta dependiendo del número puesto //

let projectInput = document.querySelector("#card-height");
let card = document.querySelector(".card");
let aspectRatioWidth = 0.7;
let aspectRatioSuits = 0.18;
let aspectRatioNumber = 0.28;

function reSize() {
  if (projectInput.value > 700) {
    projectInput.value = 700;
  } else if (projectInput.value < 100) {
    projectInput.value = 100;
  }
  let newHeight = projectInput.value;
  card.style.height = projectInput.value + "px";
  card.style.width = newHeight * aspectRatioWidth + "px";
  suits.forEach(suit => {
    suit.style.fontSize = newHeight * aspectRatioSuits + "px";
  });
  randomNumber.style.fontSize = newHeight * aspectRatioNumber + "px";
}

projectInput.addEventListener("change", reSize);
