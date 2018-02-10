var targetNumber;
var counter;
var wins = 0;
var losses = 0;


$(".card-img-top").on("click", function () {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;


  $("#counter").text(counter);

  if (counter === targetNumber) {
    alert("You won, you are amazing!");
    wins++;
    logging();
    startGame();
  }

  else if (counter >= targetNumber) {
    alert("You didn't win, but always remember 'if at first you don't exceed, try try again!'");
    losses++;
    logging();
    startGame();
  }


});
function startGame() {
  targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  for (var i = 1; i <= 4; i++) {
    var randomNumb = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var crystal = $(document.getElementById("crystal" + i));
    crystal.attr("data-crystalvalue", randomNumb);
  }
  counter = 0;

  $("#numberGuess").text(targetNumber);
  $("#counter").text(counter);

}

function logging() {
  var logWins = "<h3> Wins : " + wins + "</h3>";
  var logLosses = "<h3> Losses : " + losses + "</h3>";
  $("#wins").html(logWins);
  $("#losses").html(logLosses);


}

function resetButton() {
  wins = 0;
  losses = 0;
  startGame();
  logging();
}
// everytime I changed the code to jQuery, my reset button wouldn't work for the wins/losses
document.getElementById("reset").onclick = resetButton;
startGame();