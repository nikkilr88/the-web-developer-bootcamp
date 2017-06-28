var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.querySelector('#color-display');

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
            alert('Correct!')
        } else {
            alert('Wrong!');
        }
    });
}