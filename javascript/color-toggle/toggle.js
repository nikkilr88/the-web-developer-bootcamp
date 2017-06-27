var btn = document.getElementById('btn');
var body = document.querySelector('body');

btn.addEventListener('click', function(){
    body.style.background == '' ? body.style.background = 'green' : body.style.background = '';
});