$(document).ready(function(){
	$('.searchform label').on('click',function(){
		$(this).toggle();
		$('#search').show().focus();
	});
});