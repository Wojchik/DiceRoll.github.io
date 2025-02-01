const myButton = document.getElementById('myBtn');
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum =Math.floor(Math.random() * max) + min;
    myLabel.style.border = "2px solid black";
    myLabel.textContent = randomNum;
}
