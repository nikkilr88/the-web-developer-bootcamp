var p1Btn = document.querySelector('#p1');
var p1Display = document.getElementById('p1Display');
var p1Score = 0;

var p2Btn = document.querySelector('#p2');
var p2Display = document.getElementById('p2Display');
var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1Btn.addEventListener('click', function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener('click', function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});