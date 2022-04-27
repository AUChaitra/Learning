$ (document).ready(function()
{
	//https://stackoverflow.com/questions/39711585/how-to-add-and-remove-class-in-a-loop-with-jquery
	var count = -1;
	function AddClassToCarousel() {
		  var boxes = $('.carousel-item');
		  var dots = $('.dot');
		  var boxLength = boxes.length - 1;
		  //Check if the actual item isn't more than the length then add 1 otherway restart to 0
		  count < boxLength ? count++ : count=0;
		  //Remove the class and add it to the new target
		  boxes.removeClass('active').eq(count).addClass('active');
		  dots.removeClass('active').eq(count).addClass('active');
	}
	setInterval(AddClassToCarousel, 3000);


	//https://stackoverflow.com/questions/39711585/how-to-add-and-remove-class-in-a-loop-with-jquery
	var quotecount = -1;
	function AddClassToQuote() {
		  var quotes = $('.quote-text');
		  var quoteLength = quotes.length - 1;
		  //Check if the actual item isn't more than the length then add 1 otherway restart to 0
		  quotecount < quoteLength ? quotecount++ : quotecount=0;
		  //Remove the class and add it to the new target
		  quotes.removeClass('active').eq(quotecount).addClass('active');
	}
	setInterval(AddClassToQuote, 3000);

});