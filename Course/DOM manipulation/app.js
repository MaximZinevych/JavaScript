/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*   Variables    */
let scores, roundScore, activePlayer, firstDiceDOM, GAME_PLAYING, finalScore;

function init(){
    firstDiceDOM = document.querySelector('#dice-0');
    secondDiceDOM = document.querySelector('#dice-1');
    finalScoreDOM = document.querySelector('.final-score');
    firstDiceDOM.style.display = 'none';
    secondDiceDOM.style.display = 'none';
    toggleControls(GAME_PLAYING = true);
    roundScore = 0;
    activePlayer = 0; 
    scores = [0,0];

    finalScoreDOM.value === true ? finalScore = +finalScoreDOM.value : finalScore = 100;
    
    for(let i = 0; i < 2; i++){
        document.getElementById('score-' + i).textContent = '0';
        document.getElementById('current-' + i).textContent = '0';
        document.querySelector('#name-' + i ).textContent = 'Player ' + (i + 1);
        document.querySelector('.player-' + i + '-panel').classList.remove('winner');
        document.querySelector('.player-' + i + '-panel').classList.remove('active');
    }  

    document.querySelector('.player-0-panel').classList.add('active');
};

init();

document.querySelector('.btn-new').addEventListener('click', function(){
    init();  
});

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(GAME_PLAYING){
        let dice = Math.floor(Math.random() * 6 + 1);
        let dice2 = Math.floor(Math.random() * 6 + 1);

        firstDiceDOM.style.display = 'block';
        secondDiceDOM.style.display = 'block';

        firstDiceDOM.src = 'dice-' + dice + '.png';    
        secondDiceDOM.src = 'dice-' + dice2 + '.png';  

        if(dice !== 1 && dice2 !== 1){
            roundScore += (dice + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            if(dice === 6 && dice2 === 6){
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            }
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if(GAME_PLAYING){
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= finalScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            firstDiceDOM.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            toggleControls(GAME_PLAYING = false);
          } else {
              nextPlayer();
            }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    for(let i = 0; i < 2; i++){
        document.getElementById('current-' + i).textContent = '0';
        document.querySelector('.player-' + i + '-panel').classList.toggle('active');
        document.querySelector('.s')
    }
    firstDiceDOM.style.display = 'none';
    secondDiceDOM.style.display = 'none';
}

function toggleControls(GAME_PLAYING){
    btnRollDOM = document.querySelector(".btn-roll");
    btnHoldDOM = document.querySelector('.btn-hold');

    if(GAME_PLAYING){
        btnRollDOM.disabled = false;
        btnHoldDOM.disabled = false;
    }else{
        btnRollDOM.disabled = true;
        btnHoldDOM.disabled = true;
    }
}