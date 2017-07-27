$(document).ready(function() {
	var randomQuote;
	var randomAuthor;
	function getQuote() {
		var quotes = [
			"Wherever you go, no matter what the weather, always bring your own sunshine",
			"The best thing one can do when it's raining is to let it rain",
			"Nature is not a place to visit. It is home",
			"The mountains are calling and I must go",
			"I am glad I will not be young in a future without wilderness",
			"An early morning walk is a blessing for the whole day",
			"Nature does not hurry, yet everything is accomplished",
			"Earth laughs in flowers",
			"No snowflake ever falls in the wrong place",
			"In all things of nature there is something of the marvelous",
			"Nature never hurries. Atom by atom, little by little she achieves her work",
			"Look deep into nature, and then you will understand everything better",
			"The trees that are slow to grow bear the best fruit",
			"Nature is a mutable cloud which is always and never the same",
			"There are no lines in nature, only areas of colour, one against another",
			"Chaos was the law of nature; Order was the dream of man"
		];

		var author = [
			"Anthony J. D'Angelo",
			"Henry Wadsworth Longfellow",
			"Gary Snyder",
			"John Muir",
			"Aldo Leopold",
			"Henry David Thoreau",
			"Lao Tzu",
			"Ralph Waldo Emerson",
			"Zen proverb",
			"Aristotle",
			"Ralph Waldo Emerson",
			"Albert Einstein",
			"Moliere",
			"Ralph Waldo Emerson",
			"Edouard Manet",
			"Henry Adams",
		];
		// round number
		var randomNumber = Math.floor(Math.random() * quotes.length);
		randomQuote = quotes[randomNumber];
		randomAuthor = author[randomNumber];

		$(".quote").text(randomQuote);
		$(".author").text(randomAuthor);
	}
	
	$(".generate").on("click", function() {
		getQuote();
		$(".author").show();
		$(".tweetthis").show();
	});
	
	$(".tweetthis").on("click", function() {
		
		window.open(
				"https://twitter.com/intent/tweet?text=" +
					randomQuote +
					" - " +
					randomAuthor
			);	
	});
	
});