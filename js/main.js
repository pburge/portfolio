(function($) {

	$('#thumbs1 img').click(function(){
	    $('#largeImage1').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description1').html($(this).attr('alt'));
	    $('#portfolioModal1').animate({
	        scrollTop: $('html, body').offset().top
	    }, 500);
	});
	$('#thumbs2 img').click(function(){
	    $('#largeImage2').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description2').html($(this).attr('alt'));
	    $('#portfolioModal2').animate({
	        scrollTop: $('html, body').offset().top
	    }, 500);
	});
	$('#thumbs3 img').click(function(){
	    $('#largeImage3').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description3').html($(this).attr('alt'));
	    $('#portfolioModal3').animate({
	        scrollTop: $('html, body').offset().top
	    }, 500);
	});
	$('#thumbs4 img').click(function(){
	    $('#largeImage4').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description4').html($(this).attr('alt'));
	    $('#portfolioModal4').animate({
	        scrollTop: $('html, body').offset().top
	    }, 500);
	});
	$('#thumbs5 img').click(function(){
	    $('#largeImage5').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description5').html($(this).attr('alt'));
	    $('#portfolioModal5').animate({
	        scrollTop: $('html, body').offset().top
	    }, 500);
	});
	$('#thumbs6 img').click(function(){
	    $('#largeImage6').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description6').html($(this).attr('alt'));
	    $('#portfolioModal6').animate({
	        scrollTop: $('html, body').offset().top
	    }, 500);
	});

})(jQuery);