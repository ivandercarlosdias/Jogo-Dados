"use strict";

// DOM
const diceDom = document.querySelector(".dice");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");
const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");
const btnPlay = document.querySelector(".btn-play");
const btnHold = document.querySelector(".btn-hold");
const btnNew = document.querySelector(".btn-new");

// Valores iniciais
const initValues = function() {
    diceDom.classList.add("d-none");
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
}

const scores = [0, 0]
let currentScore = 0;
let currentPlayer= 0;

// Inicializando
initValues();

// Jogar dado
btnPlay.addEventListener("click", function() {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceDom.src = `dado-${dice}.png`;
    diceDom.classList.add("d-block");

    if (dice > 1) {
        currentScore += dice;
        document.querySelector(`#current-${currentPlayer}`).textContent = currentScore;
    } else {
        currentScore = 0
        document.querySelector(`#current-${currentPlayer}`).textContent = currentScore;
        // e passa a vez
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        player0.classList.toggle("active");
        player1.classList.toggle("active");
    }
});