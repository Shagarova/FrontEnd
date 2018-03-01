
/*вводим переменную open, которая равна элементам с классом menu__link*/
var open=document.querySelectorAll('.menu__item');

/*перебираем массив из наших open и для каждого из них вызываем функцию*/
/*с параметром link - текущий обрабатываемый элемент массива open*/
open.forEach(function (link){
	

	/*регистрируем определенный обработчик события, вызванного на link и говорим,*/
	/*что при клике а текущий элемент вызываем следующую функцию*/
	link.addEventListener('click',function(){



		/*задаем цвет активному элементу*/
		link.classList.add('active');

		if(link.previousElementSibling.classList.contains('active')){
						link.nextElementSibling.classList.remove('active');
				}


	
	// 	for(var i=0; i<open.length;i++){

	// 		// open[i].addEventListener('mouseup', function(){


	// 			if(open[i]!=link){
	// 				if(this.classList.contains('active')){
	// 					this.classList.remove('active');
	// 				}
	// 			}
	// 			else{
	// 				this.classList.add('active');
	// 			}		
	// 	// }

	// // })
		// };
		/*конец задаем цвет активному єлементу*/







		/*создаем переменную child, в которую заносим элемент, который следует за текущим*/
		var child=link.lastElementChild;
		// var child1=link.previousElementSibling;
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
		
console.log(child);
// console.log(child1);

 		 // console.log(link.nextElementSibling);
 		 //  console.log(link.parentNode.previousElementSibling.querySelector('.menu__item'));
 		 //  console.log(link.parentNode.nextElementSibling.querySelector('.menu__item'));


 		});

})