window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click",  convertAge);
};

function convertAge() {
    var age = document.getElementById("age").value;
    var days = document.getElementById("days");
    var ageInDays = age * 365.25;
    days.innerHTML = age + " years is approximately " + ageInDays + " days.";
}