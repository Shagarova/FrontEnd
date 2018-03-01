// $('.top-navigation > li').hover(function(){
// $(this).find('.submenu').slideDown();
// }, function(){
// 	$(this).find('.submenu').slideUp();
// })








// $('.top-navigation > li:not(.nav-clicked)').hover(function(){
// 	var _this = $(this);

// 	if(_this.find('.submenu').length > 0) {
// 		_this.addClass('selected');
// 	}
	
// 	_this.find('.submenu').stop(true).animate({
// 		top:'100%'
// 	});
// }, function(){

// 	var _this = $(this);

// 	_this.find('.submenu').stop(true).delay(1000).animate({
// 		top:'-250%'
// 	}, function(){
// 		if(_this.hasClass('selected')){
// 			_this.removeClass('selected');
// 		}
// 	});

// });



$('li').click(function(){
	var _this = $(this);

	_this.toggleClass('selected');

	if(_this.hasClass('selected')) {
		_this.find('.submenu').animate({
			top:'100%'
		});
	} else {
		_this.find('.submenu').animate({
			top:'-250%'
		});
	}
});


$(window).click(function(){
	var _this = $('.selected');

	_this.removeClass('selected');
		_this.find('.submenu').animate({
			top:'-250%'
		});
});

$('li, .submenu').click(function(e){
e.stopPropagation();
})