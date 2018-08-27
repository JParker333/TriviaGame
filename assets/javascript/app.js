
// When the start button is clicked it will disapear. 
$("#start").on("click", function () {
	$("#start").remove();
	console.log("#start");
	// runs game.loadquestion
	game.loadQuestion();
})
// tell me if i was incorrect or correct
// e is passing thorugh the event
$(document).on('click', '.answer-button', function (e) {

	game.clicked(e);

})

// Resets game
$(document).on('click', '#reset', function(){

	game.reset();
})

// Trivia questions 
var questions = [{
	question: "test question 1?",
	answers: ["test answer 1.1", "test answer 1.2", "test answer 1.3", "test answer 1.4"],
	correctAnswer: "test answer 1.3",
	image: "placeholder1"
}, {
	question: "test question 2?",
	answers: ["test answer 2.1", "test answer 2.2", "test answer 2.3", "test answer 2.4"],
	correctAnswer: "test answer 2.1",
	image: "placeholder2"
}, {
	question: "test question 3?",
	answers: ["test answer 3.1", "test answer 3.2", "test answer 3.3", "test answer 3.4"],
	correctAnswer: "test answer 3.3",
	image: "placeholder3"
}, {
	question: "test question 4?",
	answers: ["test answer 4.1", "test answer 4.2", "test answer 4.3", "test answer 4.4"],
	correctAnswer: "test answer 4.4",
	image: "placeholder4"
}, {
	question: "test question 5?",
	answers: ["test answer 5.1", "test answer 5.2", "test answer 5.3", "test answer 5.4"],
	correctAnswer: "test answer 5.4",
	image: "placeholder5"
}, {
	question: "test question 6?",
	answers: ["test answer 6.1", "test answer 6.2", "test answer 6.3", "test answer 6.4"],
	correctAnswer: "test answer 6.1",
	image: "placeholder6"
}, {
	question: "test question 7?",
	answers: ["test answer 7.1", "test answer 7.2", "test answer 7.3", "test answer 7.4"],
	correctAnswer: "test answer 7.3",
	image: "placeholder7"
}, {
	question: "test question 8?",
	answers: ["test answer 8.1", "test answer 8.2", "test answer 8.3", "test answer 8.4"],
	correctAnswer: "test answer 8.2",
	image: "placeholder8"
}, {
	question: "test question 9?",
	answers: ["test answer 9.1", "test answer 9.2", "test answer 9.3", "test answer 9.4"],
	correctAnswer: "test answer 9.4",
	image: "placeholder9"
}, {
	question: "test question 10?",
	answers: ["test answer 10.1", "test answer 10.2","test answer 10.3", "test answer 10.4"],
	correctAnswer: "test answer 10.1",
	image: "placeholder10"
}, {
	question: "test question 11?",
	answers: ["test answer 11.1", "test answer 11.2","test answer 11.3", "test answer 11.4"],
	correctAnswer: "test answer 11.1",
	image: "placeholder11"
}, {
	question: "test question 12?",
	answers: ["test answer 12.1", "test answer 12.2","test answer 12.3", "test answer 12.4"],
	correctAnswer: "test answer 12.1",
	image: "placeholder12"
}, {
	question: "test question 13?",
	answers: ["test answer 13.1", "test answer 13.2","test answer 13.3", "test answer 13.4"],
	correctAnswer: "test answer 13.1",
	image: "placeholder10" }

];

// Game object with various properties
// methods
var game = {
	questions: questions,
	currentQuestion: 0,
	counter: 30,
	correct: 0,
	incorrect: 0,
	unanswered: 0,

	// countdown menthod. Changes the timer.
	countDown: function () {

		// reduces time --
		game.counter--;

		// decreases the counter on the screen
		$("#counter").html(game.counter);

		// if its run out of time
		if (game.counter <= 0) {

			console.log("TIME UP!");

			game.timeUp();
		}

	},
	// load question to the page
	loadQuestion: function () {

		// every second we will run the game.contdown function
		timer = setInterval(game.countDown, 1000);

		// shows timer on page
		$("#subWrapper").html("<h2> TIME REMAINING <span id='counter'>30 </span> SECONDS</h2>");

		// questions are shown in the div with subwrapper
		$("#subWrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");

		// posting answers to the page as buttons
		for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {

			// placing our buttons here
			$('#subWrapper').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');

		}


	},
	nextQuestion: function () {

		// set counter back to 30
		game.counter = 30;

		// set HTML back on page for counter
		$("#counter").html(game.counter);

		game.currentQuestion++;

		// load the question
		game.loadQuestion();

	},
	timeUp: function () {

		// timer stops
		clearInterval(timer);

		// questions unanswered increase
		game.unanswered++;

		// tells us we have ran out of time
		$("#subWrapper").html("<h2>OUT OF TIME</h2>");

		// correct answer would have been
		$("#subWrapper").append("<h3>THE CORRECT ANSWER WAS: " + questions[game.currentQuestion].correctAnswer + "</h3>");

		if (game.currentQuestion == questions.length - 1) {

			// wait 3 seconds and if it is just question we go to result screen
			setTimeout(game.results, 3 * 1000);

		} else {

			// load the next question
			setTimeout(game.nextQuestion, 3 * 1000);

		}


	},
	results: function () {

		clearInterval(timer);

		$("#subWrapper").html("<h2>ALL DONE!</h2>");

		// score was
		$("#subWrapper").append("<h3>CORRECT: " + game.correct + "</h3>");

		$("#subWrapper").append("<h3>INCORRECT: " + game.incorrect + "</h3>");

		$("#subWrapper").append("<h3>UNANSWERED: " + game.unanswered + "</h3>");

		// reset

		$("#subWrapper").append("<button id='reset'>RESET</button>");

	},
	clicked: function (e) {

		clearInterval(timer);

		// target of what we clicked
		if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {

			game.answeredCorrectly();
		} else {
			game.answeredIncorrectly();
		}
	},
	answeredCorrectly: function () {

		console.log("CORRECT!");

		// clears the times
		clearInterval(timer);

		// increases the correct count
		game.correct++;

		// writes to HTML page
		$("#subWrapper").html("<h2>YOU GOT IT RIGHT!</h2>");

		// takes us to result screen/next question
		if (game.currentQuestion == questions.length - 1) {

			// wait 3 seconds and if it is just question we go to result screen
			setTimeout(game.results, 3 * 1000);

		} else {

			// load the next question
			setTimeout(game.nextQuestion, 3 * 1000);

		}

	},

	answeredIncorrectly: function () {

		console.log("WRONG!");

		// clears the times
		clearInterval(timer);

		// increases the incorrect count
		game.incorrect++;

		// writes to HTML page
		$("#subWrapper").html("<h2>YOU GOT IT WRONG!</h2>");

		// correct answer would have been
		$("#subWrapper").append("<h3>THE CORRECT ANSWER WAS: " + questions[game.currentQuestion].correctAnswer + "</h3>");

		// takes us to result screen/next question
		if (game.currentQuestion == questions.length - 1) {

			// wait 3 seconds and if it is just question we go to result screen
			setTimeout(game.results, 3 * 1000);

		} else {

			// load the next question
			setTimeout(game.nextQuestion, 3 * 1000);
		}

	},

	reset: function () {

		// sets everything back to original amounts
		game.currentQuestion = 0;
		game.counter = 0;
		game.correct = 0;
		game.incorrect = 0;
		game.unanswered = 0;
		game.loadQuestion();

	}
}
