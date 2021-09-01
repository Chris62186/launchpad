// Greeting Update

var d = new Date();
console.log(d);
var time = d.getHours();
console.log(time);

if (time < 12) {
  document.querySelector(".welcome-message").innerHTML = "Good morning, Christopher!"
} else if (time >= 12 && time < 17){
  document.querySelector(".welcome-message").innerHTML = "Good afternoon, Christopher!"
} else {
  document.querySelector(".welcome-message").innerHTML = "Time to shut it down, Christopher!"
}

// Initial run of timer
timer();


// Countdown Timer, Runs every second
setInterval(function() {
  timer();
}, 1000);


// Button Color Randomizer
document.querySelector(".btn-color-randomizer").addEventListener("click", function() {
  buttonColorRandomizer();
});






// Functions
function buttonColorRandomizer() {
  var resourceButtons = document.querySelectorAll(".resource-button");

  for (i = 0; i < resourceButtons.length; i++){
    resourceButtons[i].style.backgroundColor = randomColors();
  }
}


function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function timer() {
  var now = new Date();
  var hoursLeft = 16 - now.getHours();
  var minutesLeft = 59 - now.getMinutes();
  var secondsLeft = 59 - now.getSeconds();


  if (now.getHours() < 8) {
    document.querySelector(".countdown-timer").innerHTML = "Not 8am yet - No work!";
  } else if (now.getHours() >= 17) {
    document.querySelector(".countdown-timer").innerHTML = "You made it to 5PM! Be done.";
  } else {
    document.querySelector(".countdown-timer").innerHTML =  hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
  }
}
