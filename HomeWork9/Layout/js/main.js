$(function(){
	$('.accordeon .accordeon__caption').on('click', open);
	$('.accordeon .accordeon__caption').on('click', active);
});


function open(){

	$(this).next().slideToggle(600);
	$('.accordeon .accordeon__description').not($(this).next()).delay(500).slideUp(800);

}


$(document).find('.accordeon__description').css({
	paddingTop: 40,
	paddingBottom: 40,
});



function active(){
$('.accordeon__caption').removeClass('active');         
$(this).toggleClass("active");
 $('.accordeon__caption').css('background', 'transparent');
 $('.active').css('background', '#cfe4dd');

}


