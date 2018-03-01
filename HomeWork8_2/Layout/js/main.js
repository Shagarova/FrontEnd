/*создаем таймер*/
setTimeout(

    function(){
        /*создаем модальное окно*/
        var modalwindow = document.createElement('div');
        $(modalwindow).addClass('modalwind');
        $(modalwindow).append(' Нажмите <strong>Enter </strong>чтобы начать');
        document.body.appendChild(modalwindow);

        /*говорим, что при нажатии на кнопку в модальном окне, оно уберется, а появится блок*/
        $(document).on('keyup', function (event) {

            event = event || window.event;
            if (event.keyCode === 13) {
                $('.modalwind').remove();  /*убираем наше окошко*/

                
                $(document).off('keyup'); /*отключаем нажатие enter*/
                

                var blockOne = document.createElement('div');
                $(blockOne).addClass('blockOne');
                document.body.appendChild(blockOne);


                /*и кнопка*/
                var button=document.createElement('button');
                $(button).addClass('button');
                $(button).append(' Нажми меня ');
                document.body.appendChild(button);

                /*действия при нажатии на кнопку под блоком*/
                $('body').on('click', '.button', function(){

                    /*считаем размеры нашего большого блока*/
                    var container = $('.blockOne');

               // Координаты начала контейнера                
               var containerStart = container.offset();                
               console.log('Координаты начала контейнера:', container.offset());
               var containerStartLeft=containerStart.left;
               var containerStartTop=containerStart.top;

                // Следовательно
                console.log('Отступ большого блока слева:', containerStart.left);
                console.log('Отступ большого блока сверху:', containerStart.top);

                // Ширина и высота контейнера        
                console.log('Ширина  и высота большого блока:', container[0].clientWidth, container[0].clientHeight);
                console.log('Координаты конца большого блока:', container[0].clientTop + container[0].clientHeight);
                console.log('Координаты большого блока справа:', container[0].clientWidth + container[0].clientLeft);


                /*функция рандомное число в промежутке*/
                function getRandomInt(min, max){
                  return Math.floor(Math.random() * (max - min + 1)) + min;
              }

              // var indentationBottom=document.body.offsetHeight-container[0].clientHeight-containerStartTop;
              // console.log('indentationBottom:', indentationBottom);

              // var indentationRight=document.body.offsetWidth-container[0].clientWidth-containerStartLeft;
              // console.log('indentationRight:', indentationRight);


              /*создаем маленький внутренний блок*/

              var blockTwo=document.createElement('div');

              $(blockTwo).addClass('blockTwo');
              blockTwo.style.border = ("border", "1px solid #701217"); 
              blockOne.appendChild(blockTwo);


            //   var another=document.querySelectorAll('.blockTwo');
            //   var index=1000;
            //   for(var i=0; i<another.length;i++){
            //     var zIndex=another[i];
            //     index==index+i;
            // }
            
            // blockTwo.style.zIndex =index;
            blockTwo.style.position= 'absolute';



            var blockTwoWidth = getRandomInt(10, container[0].clientWidth);
            blockTwo.style.width= blockTwoWidth+'px';
            console.log('ширина маленького блока ' , blockTwo.style.width);

            var blockTwoHeight= getRandomInt(10, container[0].clientHeight) ;
            blockTwo.style.height= blockTwoHeight+'px' ;
            console.log('высота маленького блока' , blockTwo.style.height);


            var blockTwoTop=container[0].clientHeight - blockTwoHeight;
            blockTwo.style.top=getRandomInt(0,  blockTwoTop) + 'px';
            console.log('blockTwoTop', blockTwoTop);

            var blockTwoLeft=container[0].clientWidth - blockTwoWidth;
            blockTwo.style.left=getRandomInt(0,  blockTwoLeft) + 'px';
            console.log('blockTwoTop' , blockTwoLeft);




        //       var containerSmall = $('.blockTwo');
        //       var containerSmallStart = containerSmall.offset();
        //       console.log('Координаты начала маленького контейнера:', containerSmall.offset());

        // // Следовательно
        // console.log('Отступ маленького блока слева:', containerSmallStart.left);
        // console.log('Отступ маленького блока сверху:', containerSmallStart.top);

        // // Ширина и высота контейнера        
        // console.log('Ширина  и высота маленького блока:', containerSmall[0].clientWidth, containerSmall[0].clientHeight);
        // console.log('Координаты конца маленького блока:', containerSmall[0].clientTop + containerSmall[0].clientHeight);
        // console.log('Координаты маленького блока справа:', containerSmall[0].clientWidth + containerSmall[0].clientLeft);





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

   // var blockTw = document.getElementsByClassName('blockTwo');

   $('body').on('mousedown', '.blockTwo', function(e){

    var coords = getCoords(blockTwo);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    // blockTwo.style.position = 'absolute';
    document.body.appendChild(blockTwo);
    moveAt(e);

    function moveAt(e) {
        blockTwo.style.left = e.pageX - shiftX + 'px';
        blockTwo.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    blockTwo.onmouseup = function() {
        document.onmousemove = null;
        blockTwo.onmouseup = null;
    };

});     

   blockTwo.ondragstart = function() {
      return false;
  };


  function getCoords(elem) {   
     var top = 0,
     left = 0;

     while (elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }

    return {
        top: top,
        left: left
    };
}
});

};

});

}, 1000);