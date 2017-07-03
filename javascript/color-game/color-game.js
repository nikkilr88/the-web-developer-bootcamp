var numSquares = 6;
var colors;
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setModeButtons();
    setSquares();
    reset();

}

resetBtn.addEventListener('click', function() {
    reset();
});

function changeColors(color) {
    //Loop through squares and change background color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //Generate random number between 0 and colors arr length
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    //Generate random colors num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    //Red
    var r = Math.floor(Math.random() * 256);
    //Blue
    var b = Math.floor(Math.random() * 256);
    //Green
    var g = Math.floor(Math.random() * 256);

    return "rgb(" + r + ', ' + b + ', ' + g + ')';
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = 'steelblue';
}

function setModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
        });
    }
}

function setSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add click listeners
        squares[i].addEventListener('click', function() {
            //Grab color of picked square
            var squareColor = this.style.backgroundColor;
            //Compare square color to picked color
            if (squareColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?"
                h1.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}
