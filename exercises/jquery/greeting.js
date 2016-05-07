var name = prompt("Hey, what is your name?")

console.log(name)

var greetingDiv = document.querySelector("div")

console.log(greetingDiv)

if (name) {
  var greetingString = "<p class='greeting-text'>Hey " + name + ", welcome to the page!</p>"

} else {
  var greetingString = "<p class='greeting-text'>Hey there stranger" + ", welcome to the page!</p>"
}

  greetingDiv.innerHTML = greetingString


// var innerHTMLofGreeting = greetingDiv.innerHTML
//
// console.log(innerHTMLofGreeting)
