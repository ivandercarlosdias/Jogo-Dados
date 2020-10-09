/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

// ocultando o dado no inicio
document.querySelector(".dice").style.display = "none";

// zerando os contadores
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-play").addEventListener("click", function() {

    // 1. gera um numero randon
    var dice = Math.floor(Math.random() * 6 + 1);

    // 2. mostra resultado
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dado-" + dice + ".png";
    console.log(dice);
    
    // 3. altera o valor atual SE o numero do dado não for 1
    if (dice !== 1) {
        // Aadiciona a pontuação 
        roundScore += dice;
        roundScore;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector('.player-0').classList.toogle("active");
        document.querySelector('.player-1').classList.toogle("active");
        //document.querySelector(".dice").style.display = "none";
    }
    
});