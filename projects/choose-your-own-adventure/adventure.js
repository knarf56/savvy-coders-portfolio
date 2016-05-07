var response = prompt("You walk into a room with a chair and a window. Type 'open the door' to open the door, type 'gaze' to gaze  out the window.");

var afterOpeningTheDoor = function () {

  response = prompt("Beyond the door, you will see a painting and a box of kittens. Type 'approach' to walk over and look at the oil painting. Type 'cuddle' to go play with the kittens.");

  if (response === 'approach') {
    alert("As you approach the oil painting, you suddenly feel lighter and you realize that you are falling through the floor...into a pit of alligators.");
    } else {
    alert("As you sit down and pull a kitten out of the box...The rest of the kittens jump on your head and scratch your face off.");
  }
}


var afterGazingOutTheWindow = function (){

  response = prompt("Outside window you see...a bank and a Range Rover. Type 'drive' to go drive the Range Rover, or type 'be financially responsible' to go to the bank.");

  if (response === 'drive') {
      alert("You jump in the Range Rover and promptly run into the back of a police cruiser.")
    } else if (response === "be financially responsible"){
      alert("You go to the bank with a stack of neatly transcribed checks to pay each of your bills a week ahead of time. As you return home, you realize that your life is very boring. You should probably take up oil painting.");
  }
}

if(response === "open the door") {
    afterOpeningTheDoor()
} else if (response === 'gaze'){
    afterGazingOutTheWindow()
} else {
  alert("Pay attention and don't be stupid!");
}
