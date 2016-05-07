//
// var thingWeWantToDo = function (event) {
//   // $("li").css('font-size', "25px")
//   // console.log(event)
//
//   $(event.target).toggleClass("bigger-font")
//   $(event.target).css('color', "yellow")
//
// }
//
// $("li").hover(thingWeWantToDo)
//
//
// //document.querySelector.addEventListener
// //$("whatever").on("eventName", fn)
// //$().click(fn)
// //.toggleClass
// //.css
// //.text

var onSubmit = function(event) {
  event.preventDefault()
}

$(".submit").click(onSubmit)
