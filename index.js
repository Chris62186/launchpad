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


document.querySelector(".btn-color-randomizer").addEventListener("click", function() {
  buttonColorRandomizer();
});

function buttonColorRandomizer() {
  var resourceButtons = document.querySelectorAll(".resource-button");

  for (i = 0; i < resourceButtons.length; i++){
    resourceButtons[i].style.backgroundColor = randomColors();
  }
}


function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
