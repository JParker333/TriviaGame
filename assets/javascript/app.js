var timer;
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
	e.preventDefault()
	console.log('clicked function');
	game.clicked(e);

})

// Resets game
$(document).on('click', '#reset', function(){

	game.reset();
})

// Trivia questions 
var questions = [{
	question: "The penalty for killing a cat, 4,000 years ago in Egypt, was?",
	answers: ["Stoning", "Death", "1 year in prision", "Mummification"],
	correctAnswer: "Death",
	imageUrl: "assets/images/catinegypt.png"
}, {
	question: "How high can a cat jump?",
	answers: ["Higher than a kite", "9 feet", "3 feet", "As much as seven times its height"],
	correctAnswer: "As much as seven times its height",
	imageUrl: "assets/images/catjumping.jpg"
}, {
	question: "How much do cats groom themselves?",
	answers: ["A cat will spend nearly 30% of its life grooming itself", "All the time", "Cats like to go to the salon", "A cat will spend nearly 60% of its life grooming itself"],
	correctAnswer: "A cat will spend nearly 30% of its life grooming itself",
	imageUrl: "assets/images/catgrooming.jpg"
}, {
	question: "How much do cats sleep?",
	answers: ["Too much", "32 hours a day", "16 hours a day", "12 hours a day"],
	correctAnswer: "16 hours a day",
	imageUrl: "assets/images/catsleeping.jpg"
}, {
	question: "What is the weight of the heaviest cat ever recorded?",
	answers: ["46 lbs", "100 lbs", "38 lbs", "52 lbs"],
	correctAnswer: "46 lbs",
	imageUrl: "assets/images/fatcat.jpg"
}, {
	question: "How many ribs do cats have?",
	answers: ["15 ribs", "13 ribs", "11 ribs", "20 ribs"],
	correctAnswer: "13 ribs",
	imageUrl: "assets/images/catribs.jpg"
}, {
	question: "Where did black cat superstition originate?",
	answers: ["Africa", "Asia", "Mexico", "America"],
	correctAnswer: "America",
	imageUrl: "assets/images/catsuper.jpg"
}, {
	question: "What is a group of kittens called?",
	answers: ["Kindle", "kitten caboodle", "Kitty Cuddle", "Kittener"],
	correctAnswer: "Kindle",
	imageUrl: "assets/images/kittypuddle.jpg"
}, {
	question: "Do cats have dominant paws?",
	answers: ["A cat can be either right-pawed or left-pawed", "Right pawed", "Left pawed", "No"],
	correctAnswer: "A cat can be either right-pawed or left-pawed",
	imageUrl: "assets/images/catpaw.jpg"
}, {
	question: "At what age can female cats mate?",
	answers: ["A female cat can start at 3 years old","A female cat has to wait until 2 years old", "A female cat can begin mating when she is between 5 and 9 months old.", "A female cat can begin mating when she is 18 months old."],
	correctAnswer: "A female cat can begin mating when she is between 5 and 9 months old.",
	imageUrl: "assets/images/pregnantcat.jpg"
}, {
	question: "Why do cats bury their feces?",
	answers: ["Cats bury their feces for fun", "Cats bury their feces to cover their trails from predators","Cats bury their feces to dig up later", "Cats bury their feces to be assholes"],
	correctAnswer: "Cats bury their feces to cover their trails from predators",
	imageUrl: "assets/images/catbox.jpg"
}, {
	question: "Can cats donate blood?",
	answers: ["No, not at all", "Yes, to humans only","No, cats are rude and dont like to.", "Cats can donate blood to other cats."],
	correctAnswer: "Cats can donate blood to other cats.",
	imageUrl: "assets/images/catdonate.jpg"
}, {
	question: "Were cats mentioned in the bible?",
	answers: ["yes, cats are holy", "The only domestic animal not mentioned in the Bible is the cat.", "Maybe", "No, cats are the devil"],
	correctAnswer: "The only domestic animal not mentioned in the Bible is the cat.",
	imageUrl: "assets/images/catbible.jpg" }

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
		// console.log(game.counter);
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
		clearInterval(timer);
		// every second we will run the game.contdown function
		timer = setInterval(game.countDown, 1000);



		// shows timer on page
		$("#subWrapper").html("<h2> TIME REMAINING <span id='counter'> 30 </span> SECONDS</h2>");

		// questions are shown in the div with subwrapper
		$("#subWrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");


		// posting answers to the page as buttons
		for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
			console.log(questions[game.currentQuestion])

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
		console.log('GameCQ: ', game.currentQuestion)

		// load the question
		game.loadQuestion();

	},
	timeUp: function () {

		// timer stops
		// clearInterval(timer);

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

			// console.log(game.results);
			// console.log(game.nextQuestion);

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

		$("#subWrapper").append("<button id='reset' class='reset'>RESET</button>");

	},
	clicked: function (e) {

		clearInterval(timer);

		// target of what we clicked
		if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {

			game.answeredCorrectly();
		} else {
			console.log('hi there')
			game.answeredIncorrectly();
		}
// adds images to page
		let img = $("<img class='img'>")
		console.log(questions[game.currentQuestion].imageUrl)
		$(img).attr("src", questions[game.currentQuestion].imageUrl);
		console.log(img)

		$("#subWrapper").append(img);

	},

	answeredCorrectly: function () {

		console.log("CORRECT!");

		// clears the times
		clearInterval(timer);

		// increases the correct count
		game.correct++;

		// writes to HTML page
		$("#subWrapper").html("<h2 class='right'>YOU GOT IT RIGHT!</h2>");

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
		$("#subWrapper").html("<h2 class='wrong'>YOU GOT IT WRONG!</h2>");

		// correct answer would have been
		$("#subWrapper").append("<h3>THE CORRECT ANSWER WAS: " + questions[game.currentQuestion].correctAnswer + "</h3>");

		// takes us to result screen/next question
		if (game.currentQuestion == questions.length - 1) {

			// wait 3 seconds and if it is just question we go to result screen
			setTimeout(game.results, 3 * 1000);

		} else {
			console.log('hello')
			// load the next question
			setTimeout(game.nextQuestion, 3 * 1000);
		}

	},

	reset: function () {

		// sets everything back to original amounts
		game.currentQuestion = 0;
		// game.counter = 0;
		game.correct = 0;
		game.incorrect = 0;
		game.unanswered = 0;
		game.loadQuestion();


	}
}
