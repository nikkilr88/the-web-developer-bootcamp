var response = prompt('Are we there yet?');

while(response.indexOf("yes") === -1 && response.indexOf("yeah") === -1) {
     response = prompt('Are we there yet?');
}

alert('Yay! We finally made it!');