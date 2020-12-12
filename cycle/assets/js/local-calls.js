$(document).ready(function() {

  $('.gallery').cycle({
		fx: 'scrollLeft',
    speed: 700,
    next: '.gallery-box',
    timeout: 0,
	});

});