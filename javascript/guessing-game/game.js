var num = Math.floor(Math.random() * 10);

var guess = Number(prompt("Guess a number: "));

while (guess !== num) {
    if (guess > num) {
        alert('Too high! Try again!');
    }
    else {
        alert('Too low! Try again!');
    }
    guess = Number(prompt("Guess a number: "));
}

alert('You got it!');
