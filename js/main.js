$("#web").click(function() {
	$('html,body').animate({
	scrollTop: $("#first").offset().top},
	'slow');
});

$("#about").click(function() {
	$('html,body').animate({
	scrollTop: $("#second").offset().top},
	'slow');
});

$("#contact").click(function() {
	$('html,body').animate({
	scrollTop: $("#third").offset().top},
	'slow');
});