
/*вводим переменную open, которая равна элементам с классом menu__link*/
var open=document.querySelectorAll('.menu__item');

/*перебираем массив из наших open и для каждого из них вызываем функцию*/
/*с параметром link - текущий обрабатываемый элемент массива open*/
open.forEach(function (link){
	/*регистрируем определенный обработчик события, вызванного на link и говорим,*/
	/*что при клике а текущий элемент вызываем следующую функцию*/
	link.addEventListener('click',function(){
		/*задаем цвет активному элементу*/
			for(var i=0; i<open.length;i++){
			if(open[i]!=link){
				if(open[i].classList.contains('active')){
					open[i].classList.remove('active');
				}
			}
			else{
				open[i].classList.add('active');
			}
		}
		/*конец задаем цвет активному єлементу*/
		/*создаем переменную child, в которую заносим элемент, который следует за текущим*/
		var child=link.nextElementSibling;
		if(child.style.display!='block'){
			child.style.display='block';
		} 
		// иначе меняет на none, т.е. убирает этот блок
		else{
			child.style.display='none';
		}

		/*вводим еще 1 переменную и сравниваем ее с текущей. если они равны, то оставляем блок открытым*/
		/*если не равны, то у той, что не текущая, скрываем блок*/
		var another=document.querySelectorAll('.menu__open');
		for(var i=0; i<another.length;i++){

			if(another[i]!=child){
				if(another[i].style.display='block'){
					another[i].style.display='none';
				}
			}
		}


		console.log(link);
		
		console.log(open[i]);

 		

 		});

})