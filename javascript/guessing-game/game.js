var num = 4;
var guess = Number(prompt("Guess a number: "));

if(guess === num) {
    alert('You got it!');
} else if(guess > num){
    alert('Too high! Try again!');
} else {
    alert('Too low! Try again!');
}