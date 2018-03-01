$("p").find( "strong" ).css( "color", "#701217" );


$('.header__menu > li:first-child').next(".header__menu__item").css( "border", "3px solid #701217" );


$('.dropdown-menu > li:last-child').prev().css( "font-size", "22px" );


$(".dropdown-menu").children("li").css("background-color", "#cce0dd");

$('.dropdown-menu > li').parent().css( "background-color", "#701217" );

$('.galery__item').parents().css( "background-color", "#cce0dd" );


$('.header__menu > li:last-child').append(" Ну воооот... Снова я последний :(");
$('.header__menu > li:first-child').prepend("Ха-ха, а я - первый ")


$('.footer__menu > li:first-child').before("Hello! i'm first");
$('.footer__menu > li:last-child').after(" А что, после меня никого нет?");


setTimeout(function(){
	$(document.querySelector('.galery__items').children[1]).remove()
},10000);



$(document.querySelector('.footer__menu').children[3]).text("<h1>Privet</h1>");


$(document.querySelector('.footer__menu').children[2]).html("<h1>Privet</h1>");


var picture = $( ".galery__item" );
$( document ).on( "click", function( event ) {
  $( event.target ).closest( picture ).toggleClass( "scale" );
});

// $(".header__menu").after('Privet');
// $(".header__menu__item").prepend("Ну вот и");

// $(selector1).next() - найти следующий элемент, после элемента selector1.
// $(selector1).prev() или $(selector1).prev(selector2) - то же самое, но с предыдущими элементами

// $(selector1).parent(‘selector2’) - обратиться к родителю элемента selector1, у которого есть selector2
// $(selector1).children() или $(selector1).children(selector2) - обратиться к потомкам selector1


// .append(content) - добавляет контент в конец элемента
// .prepend(content) - добавляет контент в начало элемента
// .before(content) - добавляет контент перед элементом
// .after(content) - добавляет контент после элемента
// .text(content) - задаёт текст внутри элемента
// .html(content) - задаёт html разметку внутри элемента
// .remove() - удаляет указанный элемент из DOM
