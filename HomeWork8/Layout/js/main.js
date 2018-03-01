 //(function() {

  // $('button').click(function(e) { 


 //        var container = $('.block');

 //        // Координаты начала контейнера                
 //        var containerStart = container.offset();                
 //        console.log('Координаты начала контейнера:', container.offset());

 //        // Следовательно
 //        console.log('Отступ слева:', containerStart.left);
 //        console.log('Отступ сверху:', containerStart.top);

 //        // Ширина и высота контейнера        
 //        console.log('Ширина и высота контейнера:', container[0].clientWidth, container[0].clientHeight);

 //        *
 //         * 1. После этого мы можем получить координаты конца контейнера сложив его ширину
 //          и длину с координатами начала
 //         * 2. Теперь у нас есть все 4 границы области, куда будет вставляться прямоугольник. То есть мы должны его
 //         *    вставить на страницу так, чтобы его координаты были случайными, но при этом не больше и не меньше
 //         *    координатов краёв нашего контейнера.
 //         * 3. Ширину, высоту и цвет прямоугольника, мы также можем выбрать случайным 
 //         образом из заданного диапазона чисел
 //         * 4. Напоминаю как создавать генератор случайных чисел (например от 1 до 10) 
 //         *    Math.floor(Math.random() * 10) + 1


 //        // Пример вставки прямоугольника на страницу
 //        var squareWidth = 200;
 //        var squareHeight = 100;
 //        var squareLeft = 400;
 //        var squareTop = 200;

 //        var square = '<div style="width: ' + squareWidth + 'px; height: ' + squareHeight + 'px; background: rgb(255, 100, 13); position: absolute;  left: ' + squareLeft + 'px; top: ' + squareTop + 'px"></div>';

 //        container.append(square);
 //    });
// }());

/*создаем таймер*/
setTimeout(

	function(){
		/*создаем модальное окно*/
		var modalwindow = document.createElement('div');
		$(modalwindow).addClass('modalwind');
		$(modalwindow).append(' Нажмите <strong>Enter </strong>чтобы начать<br> <button id="button">Enter </button>');
		document.body.appendChild(modalwindow);

/*говорим, что при нажатии на кнопку в модальном окне, оно уберется, а появится блок*/
		$('body').on('click', '#button', function(){
			$('.modalwind').remove();
			var blockOne = document.createElement('div');
			$(blockOne).addClass('block');
			document.body.appendChild(blockOne);


/*и кнопка*/
			var button=document.createElement('button');
			$(button).addClass('button');
			$(button).append(' Нажми меня ');
			document.body.appendChild(button);


/*действия при нажатии на кнопку под блоком*/
			$('body').on('click', '.button', function(){


				var container = $('.block');
         // Координаты начала контейнера                
         var containerStart = container.offset();                
         console.log('Координаты начала контейнера:', container.offset());

        // Следовательно
        console.log('Отступ слева:', containerStart.left);
        console.log('Отступ сверху:', containerStart.top);

        // Ширина и высота контейнера        
        console.log('Ширина и высота контейнера:', container[0].clientWidth, container[0].clientHeight);
        console.log('Координаты конца контейнера:', container[0].clientWidth + container[0].clientHeight);


/*создаем маленький внутренний блок*/




        var blockTwo=document.createElement('div');
				blockTwo.style.position= 'relative';
				blockTwo.style.display= 'block';
				blockTwo.style.width =  ((Math.floor(Math.random() * 10) + 1)*20) + 'px'; 
				blockTwo.style.height =  ((Math.floor(Math.random() * 10) + 1)*20) + 'px';
				blockTwo.style.border = ("border", "1px solid #701217");  
				blockTwo.style.top = ((Math.floor(Math.random() * 10) + 1)*10) + 'px'; 
				blockTwo.style.left =((Math.floor(Math.random() * 10) + 1)*40) + 'px';
				blockTwo.style.backgroundColor='#f00';
				blockOne.appendChild(blockTwo);



			});
// });

});

	}
	, 1000);






