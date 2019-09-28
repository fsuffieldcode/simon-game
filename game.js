// VARIABLES

var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userChosenColour = "";

var level = 0;

// LISTENERS

$(".btn").on( "click", function() {
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

$("html").one("keypress", function() {
    $("h1").text("Level 0");
    nextSequence();
});

// FUNCTIONS

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * Math.floor(4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var selectedButton = $("#" + randomChosenColour);
    selectedButton.fadeOut(100).fadeIn(100);
    playSound(selectedButton);
    level += 1;
    $("h1").text("Level " + level);
}


function playSound(name) {
    var selectedAudio = new Audio("sounds/" + name + ".mp3");
    selectedAudio.play();
}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}

