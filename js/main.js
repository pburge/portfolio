(function($) {
	$('#thumbs img').click(function(){
	    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description').html($(this).attr('alt'));

	});
	$('#thumbs2 img').click(function(){
	    $('#largeImage2').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description2').html($(this).attr('alt'));

	});
	$('#thumbs3 img').click(function(){
	    $('#largeImage3').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description3').html($(this).attr('alt'));

	});
	$('#thumbs4 img').click(function(){
	    $('#largeImage4').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description4').html($(this).attr('alt'));

	});
	$('#thumbs5 img').click(function(){
	    $('#largeImage5').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description5').html($(this).attr('alt'));

	});
	$('#thumbs6 img').click(function(){
	    $('#largeImage6').attr('src',$(this).attr('src').replace('thumb','large'));
	    $('#description6').html($(this).attr('alt'));

	});

})(jQuery);