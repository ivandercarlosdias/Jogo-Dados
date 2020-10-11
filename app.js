/*

Regras do jogo:

- O jogo tem 2 jogadores, jogando em turnos
- Em cada turno, o jogador joga o dado quantas vezes quiser. Cada resultado é adicionado a sua pontuação da rodada
- MAS, se o dado cair com o n° 1, todo os pontos da rodada será perdido e passará a vez para o outro jogador
- O jogador pode escolher "Passa a vez", que adicionará os pontos da rodada a seu placar e passará a vez para o outro jogador
- O primeiro jogador que alcançar 100 pontos no placar ganha o jogo

*/

// declarando variaveis
var score, roundScore, activePlayer, gamePlaying;

// ao atingir esse valor o jogador vence
var winnerScore = 10;

// ao carregar a página, chamo a função init para definir os valores defaults das variáveis
init();

// jogar o dado
document.querySelector(".btn-play").addEventListener("click", function() {
    if (gamePlaying) {
        // 1. gera um numero randon
        var dice = Math.floor(Math.random() * 6 + 1);
        // 2. mostra resultado
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dado-" + dice + ".png";
        // 3. altera o valor atual SE o numero do dado não for 1
        if (dice !== 1) {
            // adiciona valor na pontuação atual
            roundScore += dice;
            roundScore;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            // passa a vez
            nextPlayer();        
        }
    }
});

// botão passar a vez
document.querySelector(".btn-hold").addEventListener("click", function(){
    if (gamePlaying) {
        // adiciona valor da pontuação atual no placar do jogo
        score[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];
        // verifica se o jogador venceu o jogo
        if (score[activePlayer] >= winnerScore ) {
            document.querySelector("#name-" + activePlayer).textContent = "VENCEDOR";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer).classList.add("winner","text-danger");
            document.querySelector(".player-" + activePlayer).classList.remove("active");
            document.querySelector(".dice").style.display = "none";
            gamePlaying = false;
        } else {
            // passa a vez
            nextPlayer();
        } 
    }
});

// botão novo jogo
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    // valores default variáveis
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

    // removendo classes e voltando textos
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0").classList.remove("winner","text-danger");
    document.querySelector(".player-1").classList.remove("winner","text-danger");
    document.querySelector(".player-0").classList.remove("active");
    document.querySelector(".player-1").classList.remove("active");
    document.querySelector(".player-0").classList.add("active");
};

// função para passar a vez para o outro jogador
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // zerando valores da pontuação atual e ocultando o dado
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0").classList.toggle("active");
    document.querySelector(".player-1").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
};