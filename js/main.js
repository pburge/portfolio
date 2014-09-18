$(document).ready(function() {

	//foundation init
	// $(document).foundation();

	$(function() {
	    
	    $("h1")
	        .wrapInner("<span>")

	    $("h1 br")
	        .before("<span class='spacer'>")
	        .after("<span class='spacer'>");

	});

	// scrolls down to the projects
	$("#web").click(function() {
		$('html,body').animate({
		scrollTop: $("#first").offset().top},
		'slow');
	});

	// scrolls down to the about section
	$("#about").click(function() {
		$('html,body').animate({
		scrollTop: $("#second").offset().top},
		'slow');
	});

	// scrolls all the way to the bottom for the contact form
	$("#contact").click(function() {
		$('html,body').animate({
		scrollTop: $("#third").offset().top},
		'slow');
	});

	// just sends the user back to the top
	$('.scrollup').click(function () {
	    $("html, body").animate({
		   scrollTop: 0
	    }, 600);
	    return false;
	});

	// fades a button in and out at above or below 1000px.
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 1000 && $(window).width() > 1000) {
		   $('.scrollup').fadeIn();
	    } else {
		   $('.scrollup').fadeOut();
	    }
	});	
});


