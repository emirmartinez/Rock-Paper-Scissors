////////////////////////
//     JQuery function
////////////////////////

$(document).ready(function(){


////////////////////
//  RESET BUTTON  //
////////////////////
finalWinner()
$(".reset").on("click", function(){
  $(".reset").css({'background-color': '#9154e0'})
  setTimeout(() => {
    $(".reset").css({'background-color': '#ccc'})
  }, 1000);
localStorage.clear();
location.reload()
})

//____________________

var selected;
generalCount ()
userScore ()
compScore ()


$(".userScore").replaceWith(`<h2 class="userScore">My Score: ${myStorage["userCount"]}</h2>`)
$(".compScore").replaceWith(`<h2 class="compScore">Score: ${myStorage["compCount"]}</h2>`)

if(myStorage[1]){
$(".first-result").replaceWith(myStorage[1])
}
if(myStorage[2]){
  $(".second-result").replaceWith(myStorage[2])
}
if(myStorage[3]){
  $(".third-result").replaceWith(myStorage[3])
}
if(myStorage[4]){
  $(".fourth-result").replaceWith(myStorage[4])
}
if(myStorage[5]){
  $(".fifth-result").replaceWith(myStorage[5])
}
if(myStorage[6]){
$(".sixth-result").replaceWith(myStorage[6])
}
if(myStorage[7]){
  $(".seventh-result").replaceWith(myStorage[7])
}
if(myStorage[8]){
  $(".eight-result").replaceWith(myStorage[8])
}
if(myStorage[9]){
  $(".ninth-result").replaceWith(myStorage[9])
}
if(myStorage[10]){
  $(".tenth-result").replaceWith(myStorage[10])
}


///////////////////
// Rock Button
///////////////////

$(".rock").on("click", function (e){
  var selected = "Rock"
  console.log(selected)
  myStorage["generalCount"]++

  var game = RockPaperScissors("Rock")
  countKeeper(game)

  //disable click after div is clicked
  $(".rock").off('click');
  $(".paper").off('click');
  $(".scissors").off('click');

  ///
  var rock = myStorage["generalCount"]
  picStorage(rock)
  myStorage[rock] = [`<img src="images/${valReturn(generator)}.png" width="100" height="50">`, `<img src="images/${selected}.png" width="100" height="50">`]
  ///

  setTimeout(() => {
  $(".userScore").replaceWith(`<h2 class="userScore">My Score: ${myStorage["userCount"]}</h2>`)
  }, 2000);
  setTimeout(() => {
  $(".compScore").replaceWith(`<h2 class="compScore">Score: ${myStorage["compCount"]}</h2>`)
  }, 2000);

  $(".rock").css({'background-color': '#9154e0'})

  setTimeout(() => {
    $(".rock").css({'background-color': '#ccc'})
  }, 1000);

  setTimeout(() => {
  $(".final").replaceWith(`The Winner is ...<strong>${game}, I picked ${valReturn(generator)}</strong>`)
  }, 2000);

  $(".main-rps").replaceWith(`<img src="images/countDown.gif" class="main-rps" width="250" height="220">`)

  setTimeout(() => {
  $(".main-rps").replaceWith(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="280" height="230">`)
  }, 2000);

  setTimeout(() => {
    location.reload()
  }, 4000);

  setTimeout(() => {
    $(".first-colum").append(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="100" height="50">`)
    }, 2000);

  setTimeout(() => {
      $(".second-colum").append(`<img src="images/${selected}.png" class="main-rps" width="100" height="50">`)
      }, 2000);

});

///////////////////
// Paper Button
///////////////////
$(".paper").on("click", function (e){
  var selected = "Paper"
  console.log(selected)
  myStorage["generalCount"]++

  var game = RockPaperScissors("Paper")
  countKeeper(game)

  //disable click after div is clicked
  $(".rock").off('click');
  $(".paper").off('click');
  $(".scissors").off('click');

  ///
  var paper = myStorage["generalCount"]
  picStorage(paper)
  myStorage[paper] = [`<img src="images/${valReturn(generator)}.png" width="100" height="50">`, `<img src="images/${selected}.png" width="100" height="50">`]
  ///

  setTimeout(() => {
  $(".userScore").replaceWith(`<h2 class="userScore">My Score: ${myStorage["userCount"]}</h2>`)
  }, 2000);
  setTimeout(() => {
  $(".compScore").replaceWith(`<h2 class="compScore">Score: ${myStorage["compCount"]}</h2>`)
  }, 2000);

  $(".paper").css({'background-color': '#9154e0'})

  setTimeout(() => {
    $(".paper").css({'background-color': '#ccc'})
  }, 1000);

  setTimeout(() => {
  $(".final").replaceWith(`The Winner is ...<strong>${game}, I picked ${valReturn(generator)}</strong>`)
  }, 2000);

  $(".main-rps").replaceWith(`<img src="images/countDown.gif" class="main-rps" width="250" height="220">`)

  setTimeout(() => {
  $(".main-rps").replaceWith(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="280" height="230">`)
  }, 2000);

  setTimeout(() => {
    location.reload()
  }, 4000);

  setTimeout(() => {
    $(".first-colum").append(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="100" height="50">`)
    }, 2000);

  setTimeout(() => {
      $(".second-colum").append(`<img src="images/${selected}.png" class="main-rps" width="100" height="50">`)
      }, 2000);

});

///////////////////
// Scissors Button
///////////////////
$(".scissors").on("click", function (e){
  var selected = "Scissors"
  console.log(selected)
  myStorage["generalCount"]++

  var game = RockPaperScissors("Scissors")
  countKeeper(game)

  //disable click after div is clicked
  $(".rock").off('click');
  $(".paper").off('click');
  $(".scissors").off('click');

  ///
  var scissors = myStorage["generalCount"]
  picStorage(scissors)
  myStorage[scissors] = [`<img src="images/${valReturn(generator)}.png" width="100" height="50">`, `<img src="images/${selected}.png" width="100" height="50">`]
  ///

  setTimeout(() => {
  $(".userScore").replaceWith(`<h2 class="userScore">My Score: ${myStorage["userCount"]}</h2>`)
  }, 2000);
  setTimeout(() => {
  $(".compScore").replaceWith(`<h2 class="compScore">Score: ${myStorage["compCount"]}</h2>`)
  }, 2000);

  $(".scissors").css({'background-color': '#9154e0'})

  setTimeout(() => {
    $(".scissors").css({'background-color': '#ccc'})
  }, 1000);

  setTimeout(() => {
  $(".final").replaceWith(`The Winner is ...<strong>${game}, I picked ${valReturn(generator)}</strong>`)
  }, 2000);

  $(".main-rps").replaceWith(`<img src="images/countDown.gif" class="main-rps" width="250" height="220">`)

  setTimeout(() => {
  $(".main-rps").replaceWith(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="280" height="230">`)
  }, 2000);

  setTimeout(() => {
    location.reload()
  }, 4000);

  setTimeout(() => {
    $(".first-colum").append(`<img src="images/${valReturn(generator)}.png" class="main-rps" width="100" height="50">`)
    }, 2000);

  setTimeout(() => {
      $(".second-colum").append(`<img src="images/${selected}.png" class="main-rps" width="100" height="50">`)
      }, 2000);

});


});
///////////////////////////////
//   Replace picture function
///////////////////////////////

/// Function that returns value used to call picture file on jquery
function valReturn (val) {
  return val;
};

////////////////////
//     STORAGE
////////////////////

var myStorage = window.localStorage;

var userScore = function () {
  if(myStorage["userCount"] === undefined){
    myStorage["userCount"] = 0
  }
}

var compScore = function () {
  if(myStorage["compCount"] === undefined){
    myStorage["compCount"] = 0
  }
}

var generalCount = function () {
  if(myStorage["generalCount"] === undefined){
    myStorage["generalCount"] = 0
  }
}

var picStorage = function (key){
  if(myStorage[key] === undefined){
    myStorage[key] = ""
  }
}

///////////////////////
//    Helper functions
//////////////////////
var countKeeper = function (results){

  if (results === "HaHa I Beat You!"){
    myStorage["compCount"]++
    if (myStorage["compCount"] !== 3){
      return "Lets Keep playing";
    } else {
      return "Sorry you lost. Let\'s Play Again";
    }
  }
  if (results === "You Won!") {
    myStorage["userCount"]++
    if (myStorage["userCount"]!== 3){
        return "Lets Keep playing";
    } else {
        return "You\'re the Winner'";
      }
    } else {
      return "Lets Keep playing";
    }
  };


////////////////////////
// Game Function
////////////////////////


//// Function that generates random number
var getRandom = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};


////Uses getRandom function to generate random rock, paper, scissors
var rpsGenerator = function (){

  if (getRandom(3) === 1){
    return "Rock";
  }
  if (getRandom(3) === 0){
    return "Paper";
  } else {
    return "Scissors";
  }
};

////The Actual Game Function
var generator = rpsGenerator();
var RockPaperScissors = function (selector){
  if(selector === "Rock"){
      if(generator === "Paper"){
        return "HaHa I Beat You!";
      }
        if(generator === "Scissors"){
          return "You Won!";
      }
      if(generator === "Rock"){
        return "We Tied!";
      }
    };
  if(selector === "Paper"){
     if(generator === "Scissors"){
        return "HaHa I Beat You!";
      }
        if(generator === "Rock"){
        return "You Won!";
      }
      if(generator === "Paper"){
        return "We Tied!";
      }
    };
  if(selector === "Scissors"){
     if(generator === "Rock"){
      return "HaHa I Beat You!";
      }
        if(generator === "Paper"){
        return "You Won!";
      }
      if(generator === "Scissors"){
        return "We Tied!";
      }
    };
};

// Winner Functino

var finalWinner = function (){
  if(myStorage["userCount"] >= 3){
    $(".final").replaceWith(`<h1>Winner Winner Chicken Dinner!!</h1>`)
    $(".reset").replaceWith(`<div class="reset"><p>Play Again</p></div>`);
    $(".rock").off('click');
    $(".paper").off('click');
    $(".scissors").off('click');
  }
  if(myStorage["compCount"] >= 3){
    $(".final").replaceWith(`<h1>Sorry, you lost. Lets play again!!</h1>`)
    $(".reset").replaceWith(`<div class="reset"><p>Play Again</p></div>`);
    $(".rock").off('click');
    $(".paper").off('click');
    $(".scissors").off('click');
  }
}