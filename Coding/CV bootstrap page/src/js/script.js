	$(function() {
		$('#client-photo').delay(2000).fadeOut(1000, function(){
			$(this).attr('src', 'img/client2.jpeg').fadeIn(5000).delay(2000).fadeOut(1000, function(){
				$(this).attr('src', 'img/client3.jpeg').fadeIn(5000)
			}); // фото клиента сменилось
		});
		$('#review').delay(2000).fadeOut(1000, function(){
			$(this).text('Here could be her quote here could be her quote here could be her quote').fadeIn(5000).delay(2000).fadeOut(1000, function(){
				$(this).text('Here could be his quote here could be his quote here could be his quote here could be his quote').fadeIn(5000)
			}); // отзыв клиента сменился
		});
		$('#signature').delay(2000).fadeOut(1000, function(){
			$(this).text('- Her Name').fadeIn(5000).delay(2000).fadeOut(1000, function(){
				$(this).text('- His Name').fadeIn(5000)
			}); // подпись клиента сменилась
		});
	});		