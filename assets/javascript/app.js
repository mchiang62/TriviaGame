// create start button
// create set of questions, choices, and answers
// there can only be one answer for each question
// create a timer
// correct, incorrect, unanswered

$(document).ready(function(){

var quiz = [
    
    {
        ques: "Who was a former drug sales associate?",
        choices: ["answer","answer","answer","answer"],
        name: "sales",
        answer: "answer",

},
{
    ques: "What was Jason's favorite team?" ,
    choices: ["answer","answer","answer","answer"],
    name: "team",
    answer: "answer",

},
{
    ques: "What was Chidi's profession - ethics prof?",
    choices: ["answer","answer","answer","answer"],
    name: "Ethics",
    answer: "answer",

},
{
    ques: "Who was the EDM DJ?",
    choices: ["answer","answer","answer","answer"],
    name: "DJ",
    answer: "answer",

},
{
    ques: "Who got hit by a truck from picking up the lonely gal margarita mix?",
    choices: ["answer","answer","answer","answer"],
    name: "margarita",
    answer: "answer",

},
{
    ques: "Who was raised in a high society England?" ,
    choices: ["answer","answer","answer","answer"],
    name: "england",
    answer: "answer",

},
{
    ques: "Who died from an air conditioner falling from the 3rd floor and landing on their head?",
    choices: ["answer","answer","answer","answer"],
    name: "ac",
    answer: "answer",

},
{
    ques: "Who provided all the knowledge and information for the humans?",
    choices: ["answer","answer","answer","answer"],
    name: "robot",
    answer: "answer",

},
{
    ques: "Who was the Bad Place architect in charged of the Good Place?" ,
    choices: ["answer","answer","answer","answer"],
    name: "architect",
    answer: "answer",

},
{
    ques: "Who lived in the Medium place?" ,
    choices: ["answer","answer","answer","answer"],
    name: "medium",
    answer: "answer",

}];

//     currentSet = 0;
//     correct = 0;
//     incorrect = 0;
//     unanswered = 0;
//     clearInterval(timerId);

// var counter = 30;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 20;
var timer;
// var currentSet = 0;
var timerOn = false;
var timerId = " " ;
var labels = ["first", "second", "third", "forth"];
var twoMin = 120;



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
    if (twoMin < 180) {
        $('#timer').text("Time Remaining: " + twoMin);
    }
    
    if (twoMin < 1) {
        window.clearInterval(update);

    }
}






})