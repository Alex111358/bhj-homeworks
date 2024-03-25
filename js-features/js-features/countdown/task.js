
let currentTime = 20; 
let timer = document.getElementById('timer');
let counter = setInterval(countDown, 1000);
function countDown(){
currentTime--;
timer.textContent = currentTime, 1000;
if (currentTime === 0){
    clearInterval(counter); 
    alert ("Вы победили в конкурсе!"); 
}
}