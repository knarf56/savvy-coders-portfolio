var player2

var runPlayer2 = function () {


  var randomNumber = Math.random()

  if (randomNumber <= .32) {
      player2 = "Rock"

  } else if (randomNumber <= .65) {
      player2 = "Paper"

  } else {
      player2 = "Scissors"
  }

  console.log("Player 2", player2)
}
var game = function () {

  var player1 = prompt("Choose Rock, Paper, or Scissors by typing 'Rock', 'Paper', or 'Scissors'");

  runPlayer2 ()

  if (player2 === player1) {
    alert("You tied!")
  } else {

  if(player1 === "Rock") {
    if (player2 === "Scissors") {
      alert("You win!")
    } else {
      alert("You lose!")
    }

  }  else if(player1 === "Paper") {
      if (player2 === "Rock") {
        alert("You win!")
      } else {
        alert("You lose!")
      }

  }  else if(player1 === "Scissors") {
        if (player2 === "Paper") {
          alert("You win!")
        } else {
          alert("You lose!")
        }

      } else {
        alert("You didn't follow the rules!")
      }
    }
  }

var round = 1;

while (round <=2) {
  $("body").append(round)
  game()
  round +=1
}
