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
		$(modalwindow).append(' Нажмите <strong>Enter </strong>чтобы начать<br> ');
		document.body.appendChild(modalwindow);

		/*говорим, что при нажатии на кнопку в модальном окне, оно уберется, а появится блок*/


		$(document).on('keyup', function (event) {
			event = event || window.event;
			if (event.keyCode === 13) {

				$('.modalwind').remove();  /*убираем наше окошко*/

				
				$(document).off('keyup'); /*отключаем нажатие enter*/
				

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

					/*считаем размеры нашего большого блока*/
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


         /*попытка сделать цвет*/


         var min= containerStart.left;
         var max=containerStart.left+container[0].clientWidth;
         var qqqq= (Math.floor(Math.random() * (max - min + 1)) + min);



         /*создаем маленький внутренний блок*/

         var blockTwo=document.createElement('div');
         $(blockTwo).addClass('blockTwo');
         blockOne.appendChild(blockTwo);
         blockTwo.style.position= 'relative';
        // blockTwo.style.display= 'block';
        blockTwo.style.width =  qqqq + 'px'; 
        if ( blockTwo.style.width>container[0].clientWidth){
        	alert('Ширина второго контейнера превышает допустимую');
        }
        console.log('ширина блока' + ' ' + blockTwo.style.width);
        blockTwo.style.height =  (Math.floor(Math.random() * 300)) + 'px';
        if ( blockTwo.style.height>container[0].clientHeight){
        	alert('Высота второго контейнера превышает допустимую');
        }
        console.log('высота блока' + ' ' + blockTwo.style.height);
        blockTwo.style.border = ("border", "1px solid #701217");  
        blockTwo.style.top = (Math.floor(Math.random() * 200)) + 'px'; 


        console.log('отступ сверху' + ' ' + blockTwo.style.top);
        blockTwo.style.left =(Math.floor(Math.random() * 300)) + 'px';
        console.log('отступ слева' + ' ' + blockTwo.style.left);




        var blockTwoo=$('.blockTwo');

        var blockTwooStart = blockTwoo.offset();                
        console.log('Координаты начала контейнера:',blockTwoo.offset());

         // Следовательно
         console.log('Отступ слева:', blockTwooStart.left);
         console.log('Отступ сверху:', blockTwooStart.top);

         // Ширина и высота контейнера        
         console.log('Ширина и высота контейнера:', blockTwoo[0].clientWidth, blockTwoo[0].clientHeight);
         console.log('Координаты конца контейнера:', blockTwoo[0].clientWidth + blockTwoo[0].clientHeight);







         /*определяем цвет маленького прямоугольника*/

         function foundColor(r,g,b){
         	var p=String(m).length;
         	var q=String(n).length;
         	var w=String(v).length;
         	if (p>1 && q>1 && w>1){
         		return '#' + m + n + v;
         	}
         	else if(p==1 && q>1 && w>1){
         		return '#' + '0' + m + n + v;
         	}
         	else if(p>1 && q==1 && w>1){
         		return '#' + m + '0' + n + v;
         	}
         	else if(p>1 && q>1 && w==1){
         		return '#' + m + n + '0' + v;
         	}
         	else if(p==1 && q==1 && w>1){
         		return '#'+ '0' + m + '0'+ n  + v;
         	}
         	else if(p==1 && q>1 && w==1){
         		return '#'+ '0' + m + n + '0' + v;
         	}
         	else if(p>1 && q==1 && w==1){
         		return '#' + m + '0'+ n + '0' + v;
         	}
         	else if(p==1 && q==1 && w==1){
         		return '#'+'0' + m + '0'+ n + '0' + v;
         	}
         } 
         var r=Math.floor(Math.random() * (256));
         var g=Math.floor(Math.random() * (256));
         var b=Math.floor(Math.random() * (256));
         var m=r.toString(16);
         var n=g.toString(16);
         var v=b.toString(16);
         var color=foundColor(r,g,b);

         /*конец определения цвета*/

         blockTwo.style.backgroundColor = color;
         blockOne.appendChild(blockTwo);
         var blockTw = document.getElementsByClassName('blockTwo');



     });
};

});

    // Отменяем действие браузера



} , 1000);






