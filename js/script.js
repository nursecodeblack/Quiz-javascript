$(document).ready(function() {
$('h1').hide().delay(500).fadeIn('slow');
$('.status').hide().delay(700).fadeIn('slow');
generateQuestions();
generateAnswers();
submit();
restart();
}); 

var currentQuestion = 0;
var selectedAnswer = "";
var score = 0;
var questions = new Array();


//list of questions
function Question(currentQuestion,answers,correct) {
	this.currentQuestion = currentQuestion;
	this.answers = answers;
	this.correct = correct;
}


//Question list - ("Question", ["answer1", "answer2", "answer3", "answer4", "answer5"],  Number of correct answer position 0 - 4) 
questions [0] = new Question ("What your favorite car?", ["Camaro","Charger","Challenger","CTS", "BMW x5"], 0);
questions [1] = new Question ("What is your favorite food?", ["hummus","nachos","chicken tenders","taco salad", "wing dings"], 1);
questions [2] = new Question ("Where is your favorite city to visit?", ["Los Angelos","Denver","Atlanta","Phoenix", "Charlotte"], 2);
questions [3] = new Question ("Where did you go to college?", ["U of M","MaryGrove","Michigan State","Wayne State University", "Ferris State"], 3);
questions [4] = new Question ("What do you like to do for fun?", ["Read books","Play video games","Knit","Cook", " Roller Skate], 4);
questions [5] = new Question ("What is your favorite genre of music?", ["Rock and Roll","Jazz","Country","Rhythm and Blues", "HipHop"], 5);
questions [6] = new Question ("What is your favorite flower?", ["Rose","Peony","Daffidil","Hydrangas", "Chrysathamum, 2);6;
questions [7] = new Question ("What is your favorite dog breed?", ["German Shepard","Pit Bull","English Bulldog","Dalmation", "Labradoodle"], 7);
questions [8] = new Question ("Who is your favorite actor?", ["Denzel Washington","Tom Hardy","Michael Fassbender","Tom Hanks", "Chadwick Boseman"], 8);
questions [9] = new Question ("What is your favorite dessert?", ["Peach Cobbler","Red Velvet Cake","Sweet Potato Pie","Apple Pie", "Lemon Pound Cake"], 9;

//questions appear
function generateQuestions() {
var q = questions [currentQuestion].currentQuestion;
$('#heading').append('<h4>' + q + '</h4>').hide().delay(1200).fadeIn('slow');
}

//answers appear
function generateAnswers(){
var write = "";
var a1 = questions [currentQuestion].answers;
for (var i = 0; i < a1.length; i++) {
    write += "<li><input type='radio' name='radio' class='option' value=" +(i)+ ">" + a1[i]+ "</li>";
}
$("#answers").append(write).hide().delay(1200).fadeIn('slow');
}

//radio button being clicked
function submit(){
$('.option').click(function() {
   if($("input[type='radio'][name='radio']").is(':checked')) { 
   	evaluation();
   	$('.option').attr('disabled',true); 
   }
});
}

//evaluate answer 
function evaluation() {
var selected = $("input[type='radio'][name='radio']:checked");
	if (selected.length >= 0) {
    	selectedAnswer = selected.val();
	}
	if (selectedAnswer == questions [currentQuestion].correct) {
		$('#correct').append("<p>Correct!</p>").hide().delay(400).fadeIn('400');
		$('#next').append("<p>Next</p>").hide().delay(400).fadeIn('400');
		$('#correct-answer').append("<p>The correct answer is" + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(400).fadeIn('400');
		nextQuestion();
		playerScore();
		currentQuestion++;
	}
	
	else {
		$('#incorrect').append("<p>Incorrect.</p>").hide().delay(400).fadeIn('400');
		$('#next').append("<p>Next</p>").hide().delay(400).fadeIn('400');
		$('#correct-answer').append("<p>The correct answer is" + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(400).fadeIn('400');
		nextQuestion();
		currentQuestion++;
	}
}

//next question 
function nextQuestion() {
 	$("#next").click(function() {
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();

if (currentQuestion >= 10) {
	complete();
	restart();
	return;
	}
else {
	questionNumber();
	generateQuestions();
	generateAnswers();
	submit();
	}
});

}

//set score
function playerScore() {
	$('#score p').remove();
	score++;
	$('#score').append(" " + '<p>' + score + '</p>');

}

//question marker
function questionNumber() {
	$('#question p').remove();
	$('#question').append(" " + '<p>' + (currentQuestion +1) + '/10</p>');
}

//final tally
function complete() {
	$('.status').hide();
	$('#heading').append("<h4>You scored" + " " + score + " " + "out of 10 <br>" + "<div class='restart'><p>Restart</p></div></h4>").hide().fadeIn('400');
	$('.restart').addClass('quiz-end');
}

//restart button
function restart() {
	$('.restart').click(function() {
		$('.restart').removeClass('quiz-end');
		currentQuestion = 0;
		score = (score-(score+1));
		questions [0];
		$('#score').hide().delay(400).fadeIn('slow');
		$('#question').hide().delay(400).fadeIn('slow');
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();
		questionNumber();
		generateQuestions();
		generateAnswers();
		submit();
		playerScore();
		$('.status').show();
	});
}








