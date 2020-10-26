"use strict";

(function() {
    // DOM
    const dice = document.querySelector(".dice");
    const btnPlay = document.querySelector(".btn-play");
    const btnHold = document.querySelector(".btn-hold");
    const btnNew = document.querySelector(".btn-new");

    // Variáveis utilizadas
    let scores, playing, currentScore, currentPlayer;

    // Inicializa valores
    const initValues = function() {
        scores = [0, 0];
        playing = true;
        currentScore = 0;
        currentPlayer = 0;
        document.querySelector("#score-0").textContent = 0;
        document.querySelector("#score-1").textContent = 0;
        document.querySelector("#current-0").textContent = 0;
        document.querySelector("#current-1").textContent = 0;
        dice.classList.add("d-none");
        document.querySelector(`#name-0`).textContent = "Player 1";
        document.querySelector(`#name-1`).textContent = "Player 2";
        document.querySelector(`.player-0`).classList.remove("winner");
        document.querySelector(`.player-1`).classList.remove("winner");
        document.querySelector(`.player-0`).classList.add("active");
        document.querySelector(`.player-1`).classList.remove("active");
    }
    initValues();
    
    // Novo jogo
    btnNew.addEventListener("click", initValues);

    // Joga o dado
    btnPlay.addEventListener("click", function() {
        if (playing) {
            const diceNumber = Math.trunc(Math.random() * 6) + 1;
            dice.src = `dado-${diceNumber}.png`;
            dice.classList.add("d-block");
            if (diceNumber > 1) {
                currentScore += diceNumber;
                document.querySelector(`#current-${currentPlayer}`).textContent = currentScore;
            } else {
                switchPlayer();
            }
        }
    });

    // Passa a vez
    btnHold.addEventListener("click", function() {
        if (playing) {
            scores[currentPlayer] += currentScore;
            document.querySelector(`#score-${currentPlayer}`).textContent = scores[currentPlayer];
            // Verifica se o jogador atingiu 100 pontos
            if (scores[currentPlayer] >= 100) {
                playing = false;
                document.querySelector(`#name-${currentPlayer}`).textContent = "🥇 WINNER";
                document.querySelector(`.player-${currentPlayer}`).classList.toggle("winner");
                dice.classList.remove("d-block");
            } else {
                switchPlayer();
            }
        }
    });

    // Troca de jogador
    const switchPlayer = function() {
        currentScore = 0
        document.querySelector(`#current-${currentPlayer}`).textContent = currentScore;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        document.querySelector(".player-0").classList.toggle("active");
        document.querySelector(".player-1").classList.toggle("active");
        dice.classList.remove("d-block");
    }
})();