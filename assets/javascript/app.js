// create start button
// create set of questions, choices, and answers
// there can only be one answer for each question
// create a timer
// correct, incorrect, unanswered

$(document).ready(function(){

var quiz = [
    
    {
        ques: "Who was a former drug sales associate?",
        choices: ["Chidi","Tahani","Jason","Eleanor"],
        name: "sales",
        answer: "Eleanor",

},
{
    ques: "What was Jason's favorite team?" ,
    choices: ["Titans","Jaguars","Falcons","Texans"],
    name: "team",
    answer: "Jaguars",

},
{
    ques: "What was Chidi's profession?",
    choices: ["Ethics Professor","Drug Sales Associate","Accountant","Surgeon"],
    name: "Ethics",
    answer: "Ethics Professor",

},
{
    ques: "Who was the EDM DJ?",
    choices: ["Michael","Tahani","Jason","Eleanor"],
    name: "DJ",
    answer: "Jason",

},
{
    ques: "Who got hit by a truck from picking up the lonely gal margarita mix?",
    choices: ["Chidi","Tahani","Jason","Eleanor"],
    name: "margarita",
    answer: "Eleanor",

},
{
    ques: "Who was raised in a high society England?" ,
    choices: ["Chidi","Tahani","Jason","Eleanor"],
    name: "england",
    answer: "Tahani",

},
{
    ques: "Who died from an air conditioner falling from the 3rd floor and landing on their head?",
    choices: ["Chidi","Tahani","Jason","Eleanor"],
    name: "ac",
    answer: "Chidi",

},
{
    ques: "Who provided all the knowledge and information for the humans?",
    choices: ["Eleanor","Chidi","Janet","Michael"],
    name: "robot",
    answer: "Janet",

},
{
    ques: "Who was the Bad Place architect in charged of the Good Place?" ,
    choices: ["Jason","Chidi","Janet","Michael"],
    name: "architect",
    answer: "Michael",

},
{
    ques: "Who lived in the Medium place?" ,
    choices: ["Mindy St. Claire","Shawn","Pillboi","Judge"],
    name: "medium",
    answer: "Mindy St. Claire",

}];


var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerOn = false;
var timerId = " " ;
var labels = ["first", "second", "third", "forth"];
var twoMin = 10;



$("#start-btn").on('click', function() {
    startGame()

});



function startGame () {
    console.log('started')
    $('#start-btn').hide();
    // $('#question-list').text(quiz); - creating a function for this
    $('#remaining-time').show();
    // $('#timer').text(counter); - need create function for this
    displayQuestions ();
    update = setInterval (timesUp, 1000);

}    


function displayQuestions (){
    $("#question-list").empty ();

    for (var q = 0; q < 10; q++) {
        $('#question-list').prepend('<div class="' + quiz[q].name + '"></div>');
        $(quiz[q].divClass).append('<div class ="ques-title">' + quiz[q].ques + '</div>');
        // need radio buttons
        for (var i = 0; i <= 3; i++) {
            $(quiz[q].divClass).append('<input type="radio"  name="' + quiz[q].name + '" value="' + quiz[q].choices[i] + '"/><label for="' + labels[i] + '">' + quiz[q].choices[i] + '</label>');
        }
        $('#question-list').prepend('<hr />');

    }
    
}

function timesUp () {
    twoMin = twoMin - 1;
    if (twoMin < 10) {
        $('#timer').text("Time Remaining: " + twoMin);
    }
    
    else if (twoMin <= 1) {
        $('#results').fadeOut(500);
        clearInterval(update);

    }
    
}









})




// Display questions & radio button for answers

// Player cannot pick more than one answer

// When timer is up, it must stop player 

// timer needs to stop at 0

// Fade out to results page ("Congrats!! You're Done!!) with correct, incorrect, unanswered tallies from the radio input. 
