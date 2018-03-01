

$( document ).ready(function() {
	$(document).find('.submenu>li>.submenu').animate({
		left:'-1500%'
	});
});

$('.top__menu>li').click(function(){
	 var _this = $(this);

	_this.toggleClass('selected');
	if(_this.siblings('.selected')){
		_this.siblings('.selected').removeClass('selected');
	};
	
	if(_this.hasClass('selected')) {

		_this.find('.submenu').animate({
			top:'100%'
		});
		_this.siblings().find('.submenu').animate({
			top:'-250%'
		})
	} 
	else {
		_this.find('.submenu').animate({
			top:'-250%'
		});
	}
});



$('.submenu>li').click(function(){

	 var _this = $(this);

	_this.toggleClass('selected');
	if(_this.siblings('.selected')){
		_this.siblings('.selected').css('border-right', '0px');
		_this.siblings('.selected').removeClass('selected');
		
	};

	if(_this.hasClass('selected')){
		_this.css('border-right', '3px solid black');
		_this.find('.submenu:first').animate({
			opacity:'0',
			top:'0%',
			left:'100%'
			// opacity:'1'
		});
		_this.find('.submenu:first').animate({
			opacity:'1'
		});
		_this.siblings().find('.submenu').animate({
			left:'-1000%'
		})
	}
	else {
		_this.find('.submenu').animate({
			left:'-1000%'
		});
	}

});


$(window).click(function(){
	var _this = $('.selected');

	_this.removeClass('selected');
	_this.find('.submenu').animate({
		top:'-250%'
	});
	$(document).find('.submenu>li>.submenu').animate({
		left:'-1500%'
	});
	$(document).find('.selected').removeClass('.selected');
	$(document).find('li').css('border-right', '0px');
});

$('li, .submenu').click(function(e){
	e.stopPropagation();
})

