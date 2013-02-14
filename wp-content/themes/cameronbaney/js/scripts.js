$(document).ready(function(){
	// Show menu on mobile
	$('.show-menu').on('click',function(e){
		e.preventDefault();
		$('.nav').toggle();
	});
});