var randomSentenceGrabber = function () {

  var randomNumber = Math.random()

  if (randomNumber= <=.32) {
    return $("")

  } else if (randomNumber <= .65) {
    return $("")

  } else {
    return $(".section h1")

  }


}

randomSentenceGrabber()

// $("Whatever").append/.prepend)
// $("Whatever").css("propertyname", "value"))
// $("Whatever").show()/.hide)
// $("Whatever".text()

var sentenceAdder = function (){
  var randomSentence = randomSentenceGrabber().text()
  $("body").append("<p>" + randomSentence + "</p>")


var i = 1;

  while (i<=5)
  
