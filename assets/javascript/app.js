// create start button
// create set of questions, choices, and answers
// there can only be one answer for each question
// create a timer
// correct, incorrect, unanswered

$(document).ready(function(){

var quiz = [
    
    {
        ques: "Who was the drug sales associate?",
        choices: ["answer","answer","answer","answer"],
        answer: "answer",

},
{
    ques: "What was Jason's favorite team?" ,
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "What was Chidi's profession - ethics prof?",
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who was the EDM DJ?",
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who got hit by a truck from picking up the lonely gal margarita mix?",
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who was raised in a high society England?" ,
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who died from an air conditioner falling from the 3rd floor and landing on his/her head?",
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who provided all the knowledge and information for the humans?",
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who was the Bad Place architect in charged of the Good Place?" ,
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

},
{
    ques: "Who was in the Medium place?" ,
    choices: ["answer","answer","answer","answer"],
    answer: "answer",

}];


var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 20;
var currentSet = 0;
var timerOn = false;
var timerId = " " ;


function startGame () {
    currentSet = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    clearInterval(timerId);

    $("#game").show();

    $('#scores').html('');

    $('#timer').text(timer);

    $('#start').hide();

    $('#remaining-time').show();

}

function displayQuestions (){
    $("#question-list").empty ();
    for (var i = 0; i < 10; i++) {
        $("#question-list").prepend('<div class="' + quiz[i] + '"></div>');


    }
    

}









startGame ()
displayQuestions ()

})