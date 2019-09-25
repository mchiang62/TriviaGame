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
// var timerOn = false;
// var timerId = " " ;
var twoMin = 15;



$("#start-btn").on('click', function() {
    startGame()

});



function startGame () {
    console.log('started')
    $('#start-btn').hide();
    $('#instructions').hide();
    // $('#question-list').text(quiz); - creating a function for this
    $('#remaining-time').show();
    // $('#timer').text(counter); - need create function for this
    displayQuestions ();
    update = setInterval (timesUp, 1000);

}    


function displayQuestions (){
    $("#question-list").empty ();

    for (var q = 0; q < 10; q++) {
        $('#question-list').prepend('<div class="' + quiz[q].name + '">' + quiz[q].ques + ' </div>');
        
        for (var i = 0; i <= 3; i++) {
            $('.' + quiz[q].name).append(`<input type="radio" name="answer${q}" class="answers"> ${quiz[q].choices[i]} </input>`);

        }
        console.log(displayQuestions)
        
// need the answers to be colored and preferably show a hand cursor
        // $(".answers").css("background-color", "gray");
        $('#question-list').prepend('<hr />');

    }

    // $(".answers").on('click', function() {
        //     console.log($(this).text())
        // all need to be colored but it needs to be highlighted a different color when user presses the answers css and js
        // $(this).css("background-color", "pink");
        // player cannot pick more than one answer
        
        // });
        
        
    }

    
    
    function timesUp () {
       
    twoMin = twoMin - 1;
    if (twoMin < 15) {
        $('#timer').text("Time Remaining: " + twoMin);
    }
    
     if (twoMin < 1) {
        clearInterval(update);

    
    
        for (var c = 0; c < quiz.length; c++) {
            console.log(quiz[c].ques)
            // console.log($())
            if (quiz[c].ques === $(input[name="answer${c}"]:checked).val()){
                console.log(yes)
            }
            
            // checked val
            // if correct = answer

// correct = 0;
// incorrect = 0;
// unanswered = 0;

        
        

        
        // hide everything by emptying and show results.
        $(".container").empty ();
        $(".container").text("Congrats!! You're Done!! :)")
        $(".container").append("Results will go here")
        // need to create if else statements
        // need to tally the correct answers - need to make loop for answers
        // whenever the final choices is chosen (onclick function), that needs to be calculated
    
    }
    } 
        
}









})




// Display questions & radio button for answers

// Player cannot pick more than one answer

// When timer is up, it must stop player 

// timer needs to stop at 0

// empty to results page (Congrats!! You're Done!!) with correct, incorrect, unanswered tallies from the on click .answers function. 
