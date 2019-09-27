var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * Math.floor(4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var selectedButton = $("#" + randomChosenColour);
    selectedButton.fadeOut(100).fadeIn(100);
    var selectedAudio = new Audio("sounds/" + randomChosenColour + ".mp3");
    selectedAudio.play();
}

