/* ------
JQuery
---------*/
var selected;

$(document).ready(function(){

$(".rock").on("click", function (e){
  $(".rock").css({'background-color': '#9154e0'})
  var selected = "Rock"
  console.log(selected)
  $(".final").replaceWith(`The Winner is ...<strong>${RockPaperScissors("Rock")}, I picked ${valReturn(generator)}</strong>`)
  setTimeout(() => {
    $(".rock").css({'background-color': '#ccc'})
  }, 1000);
  $(".main-rps").replaceWith(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="300" height="250">`)

});

$(".paper").on("click", function (e){
  $(".paper").css({'background-color': '#9154e0'})
  var selected = "Paper"
  console.log(selected)
  $(".final").replaceWith(`The Winner is ...<strong>${RockPaperScissors("Paper")}, I picked ${valReturn(generator)}</strong>`)
  setTimeout(() => {
    $(".paper").css({'background-color': '#ccc'})
  }, 1000);
  $(".main-rps").replaceWith(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="300" height="250">`)

});

$(".scissors").on("click", function (e){
  $(".scissors").css({'background-color': '#9154e0'})
  var selected = "Scissors"
  console.log(selected)
  $(".final").replaceWith(`The Winner is ...<strong>${RockPaperScissors("Scissors")}, I picked ${valReturn(generator)}</strong>`)
  setTimeout(() => {
    $(".scissors").css({'background-color': '#ccc'})
  }, 1000);
  $(".main-rps").replaceWith(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="300" height="250">`)

});


});

/* ------
Helper functions
---------*/

var userCount = 0;
var compCount = 0;


var countKeeper = function (results){

  if (results === "HaHa I Beat You!"){
    compCount +=1
    if (compCount !== 3){
      return "Lets Keep playing"
    } else {
      return "Sorry you lost. Let\'s Play Again"
    }
  }
  if (results === "You Won!") {
    userCount +=1
    if (userCount !== 3){
        return "Lets Keep playing"
    } else {
        return "You\'re the Winner'"
      }
    } else {

        return "Lets Keep playing"
    }
  }

////
////Generates Random Number Helper Fucntion
////

var getRandom = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

////
////Generates Random Rock, Paper or Scissors
////
var rpsGenerator = function (){

  if (getRandom(3) === 1){
    return "Rock"
  }
  if (getRandom(3) === 0){
    return "Paper"
  } else {
    return "Scissors"
  }
}


////
////The Actual Game Function
////

var generator = rpsGenerator()
var RockPaperScissors = function (selector){
  // var generator = rpsGenerator()
  if(selector === "Rock"){
      if(generator === "Paper"){
        return "HaHa I Beat You!"
      }
        if(generator === "Scissors"){
          return "You Won!"
      }
      if(generator === "Rock"){
        return "We Tied!"
      }
    }
  if(selector === "Paper"){
     if(generator === "Scissors"){
        return "HaHa I Beat You!"
      }
        if(generator === "Rock"){
        return "You Won!"
      }
      if(generator === "Paper"){
        return "We Tied!"
      }
    }
  if(selector === "Scissors"){
     if(generator === "Rock"){
      return "HaHa I Beat You!"
      }
        if(generator === "Paper"){
        return "You Won!"
      }
      if(generator === "Scissors"){
        return "We Tied!"
      }
    }
}

function valReturn (val) {
  return val
}