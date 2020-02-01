let scores, roundScores, activePlayer, dice;

scores = [0, 0];
roundScores = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6 + 1);

document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

