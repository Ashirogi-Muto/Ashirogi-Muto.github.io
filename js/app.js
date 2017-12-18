$(document).ready(function(){
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

	$(".git").click(function(){
		window.location.href = "https://github.com/Ashirogi-Muto";
	});
});