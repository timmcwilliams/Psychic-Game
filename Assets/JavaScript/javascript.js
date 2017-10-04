// <script type="text/javascript">
// alert("Let's get Started");

var win=0;
var lose=0;
var game=9;


for (var i = 4; i > 0; i--){

  function random_character() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr( Math.floor(Math.random() * 24), 1);
  }

game=game-1;
var game1=i
console.log("you are on game  " + game);
    // Generate a Random #

  var rchar = random_character();
    alert("the computer random character is " + rchar);
     
  // pick your character
  var userGuess=prompt("Enter your guess");
  console.log(userGuess);

  if (userGuess==rchar){
    console.log("you win");
      var win=win+1;
        console.log("wins =  " + win);}
    else {console.log("you lose")
      var lose=lose+1;
        console.log("losses = " + lose);



var targetDiv = document.getElementById("myWins");
targetDiv.innerHTML = win;

var targetDiv1 = document.getElementById("myLoses");
   targetDiv1.innerHTML = lose;

   var targetDiv2 = document.getElementById("myGuessesLeft");
   targetDiv2.innerHTML = game;

var targetDiv4 = document.getElementById("myGuess");
   targetDiv4.innerHTML = rchar;

// console.log(game1)
   var targetDiv3 = document.getElementById("totalGuesses");
   targetDiv3.innerHTML = game1;
  }}

// </script>