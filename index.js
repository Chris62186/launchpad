// Greeting Update

var d = new Date();
console.log(d);
var time = d.getHours();
console.log(time);

if (time < 12) {
  document.querySelector(".header-bar-text").innerHTML = "Good morning, Christopher!"
} else if (time >= 12 && time < 17){
  document.querySelector(".header-bar-text").innerHTML = "Good afternoon, Christopher!"
} else {
  document.querySelector(".header-bar-text").innerHTML = "Time to shut it down, Christopher!"
}

// Countdown Timer
// Runs every second
setInterval(function() {
  var now = new Date();
  var hoursLeft = 16 - now.getHours();
  var minutesLeft = 59 - now.getMinutes();
  var secondsLeft = 59 - now.getSeconds();

  if(now.getHours() >= 17) {
    document.querySelector(".countdown-timer").innerHTML = "Time until 5PM: 0 - Time to Quit";
  } else {
    document.querySelector(".countdown-timer").innerHTML = "Time until 5PM: " + hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
  }
}, 1000);


// Button Color Randomizer

document.querySelector(".btn-color-randomizer").addEventListener("click", function() {
  buttonColorRandomizer();
});

buttonColorRandomizer();




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
