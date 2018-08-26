
// When the start button is clicked it will disapear. 
$("#start").on("click", function () {
	$("#start").remove();
	console.log("#start");
});

// Trivia questions 
var questions = [{
	question: "test question 1?",
	answers: ["test answer 1, test answer 1, test answer 1, test answer 1"],
	correctAnswer: "correct test answer 1",
	image: "placeholder1"
}, {
	question: "test question 2?",
	answers: ["test answer 2, test answer 2, test answer 2, test answer 2"],
	correctAnswer: "correct test answer 2",
	image: "placeholder2"
}, {
	question: "test question 3?",
	answers: ["test answer 3, test answer 3, test answer 3, test answer 3"],
	correctAnswer: "correct test answer 3",
	image: "placeholder3"
}, {
	question: "test question 4?",
	answers: ["test answer 4, test answer 4, test answer 4, test answer 4"],
	correctAnswer: "correct test answer 4",
	image: "placeholder4"
}, {
	question: "test question 5?",
	answers: ["test answer 5, test answer 5, test answer 5, test answer 5"],
	correctAnswer: "correct test answer 5",
	image: "placeholder5"
}, {
	question: "test question 6?",
	answers: ["test answer 6, test answer 6, test answer 6, test answer 6"],
	correctAnswer: "correct test answer 6",
	image: "placeholder6"
}, {
	question: "test question 7?",
	answers: ["test answer 7, test answer 7, test answer 7, test answer 7"],
	correctAnswer: "correct test answer 7",
	image: "placeholder7"
}, {
	question: "test question 8?",
	answers: ["test answer 8, test answer 8, test answer 8, test answer 8"],
	correctAnswer: "correct test answer 8",
	image: "placeholder8"
}, {
	question: "test question 9?",
	answers: ["test answer 9, test answer 9, test answer 9, test answer 9"],
	correctAnswer: "correct test answer 9",
	image: "placeholder9"
}, {
	question: "test question 10?",
	answers: ["test answer 10, test answer 10, test answer 10, test answer 10"],
	correctAnswer: "correct test answer 10",
	image: "placeholder10"
}];