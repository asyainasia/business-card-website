$(function() {
	$('.menu').on('click', function(){
		$('.first').toggle('slide');
		$('.block').toggle('slide');
		var x = document.getElementById('mainButton');
		if (x.innerHTML === "MENU") {
			x.innerHTML = "EXIT";
		} else {
			x.innerHTML = "MENU";
		}
		//$(this).toggleClass('.exit');
	});
	$('.down').click(function(){
		$('.second').slideToggle('slow');
		$('.third').slideToggle('slow');
	});
	$('.up').click(function(){
		$('.second').slideToggle('slow');
		$('.third').slideToggle('slow');
	});
});		