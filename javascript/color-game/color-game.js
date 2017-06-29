var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //Add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    
    //Add click listeners
    squares[i].addEventListener('click', function(){
        //Grab color of picked square
        var squareColor = this.style.backgroundColor;
        //Compare square color to picked color
        if(squareColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

function changeColors(color) {
    //Loop through squares and change background color
    for(var i = 0; i < squares.length; i++) {
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
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    
    return arr;
}

function randomColor() {
    //Red
   var r =  Math.floor(Math.random() * 256);
    //Green
   var g = Math.floor(Math.random() * 256);
    //Blue
   var b = Math.floor(Math.random() * 256);
   
  return  "rgb("+r+', '+g+', '+b+')';
}