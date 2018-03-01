
/*вводим переменную open, которая равна элементам с классом menu__link*/
var open=document.querySelectorAll('.menu__link');
/*перебираем массив из наших open и для каждого из них вызываем функцию*/
 /*с параметром link - текущий обрабатываемый элемент массива open*/
open.forEach(function(link){
/*регистрируем определенный обработчик события, вызванного на link и говорим,*/
 /*что при клике а текущий элемент вызываем следующую функцию*/
	link.addEventListener('click',function(){

/*создаем переменную child, в которую заносим*/
		var child=link.parentNode.querySelector('.menu__open');
		
		/*смотрит, если у элемента свойство display не равно block, то ставит его */
		if(child.style.display!='block'){
			child.style.display='block';
		} 
		/*иначе меняет на none, т.е. убирает эот блок*/
		else{
			child.style.display='none';
		}
	});
})