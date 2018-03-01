
// $( document ).ready(function() {
// 	$(document).find('.submenu:not(:first)').animate({
// 		left:'-1500%'
// 	});
// });


// $('.top__menu>li').click(function(){
// 	// var _this = $(this);

// 	$(this).toggleClass('selected');
// 	if($(this).siblings('.selected')){
// 		$(this).siblings('.selected').removeClass('selected')
// 	};
// 	var $li = $(this).parent();
// 	console.log($li);
// 	if($(this).hasClass('selected')) {
// 		$(this).find('.submenu').animate({
// 			top:'100%'
// 		});
// 		// $(this).find('.submenu:not(:first)').animate({
// 		// 	top:'-1500%'
// 		// })
// 	} 
// 	else {
// 		$(this).find('.submenu').animate({
// 			top:'-250%'
// 		});
// 	}
// });


// $('.submenu>li').click(function(){
// 	$(this).toggleClass('selected');
// 	if($(this).siblings('.selected')){
// 		$(this).siblings('.selected').removeClass('selected')
// 	};

// 	if($(this).hasClass('selected')){
// 		$(this).find('.submenu:first').animate({
// 			top:'0%',
// 			left:'100%'
// 		});
// 	}
// 	else {
// 		$(this).find('.submenu').animate({
// 			left:'-1000%'
// 		});
// 	}

// });

$( document ).ready(function() {
	$(document).find('.submenu>li>.submenu').animate({
		left:'-1500%'
	});
});

$('.top__menu>li').click(function(){
	// var _this = $(this);

	$(this).toggleClass('selected');
	if($(this).siblings('.selected')){
		$(this).siblings('.selected').removeClass('selected');
	};
	var $li = $(this).parent();
	console.log($li);
	if($(this).hasClass('selected')) {

		$(this).find('.submenu').animate({
			top:'100%'
		});
		$(this).siblings().find('.submenu').animate({
			top:'-250%'
		})
	} 
	else {
		$(this).find('.submenu').animate({
			top:'-250%'
		});
	}
});



$('.submenu>li').click(function(){
	$(this).toggleClass('selected');
	if($(this).siblings('.selected')){
		$(this).siblings('.selected').css('border-right', '0px');
		$(this).siblings('.selected').removeClass('selected');
		
	};

	if($(this).hasClass('selected')){
		$(this).css('border-right', '3px solid black');
		$(this).find('.submenu:first').animate({
			top:'0%',
			left:'100%'
		});
		$(this).siblings().find('.submenu').animate({
			left:'-1000%'
		})
	}
	else {
		$(this).find('.submenu').animate({
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
	$(document).find('li').css('border-right', '0px');
});

$('li, .submenu').click(function(e){
	e.stopPropagation();
})

