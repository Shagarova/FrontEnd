var operand1;
var operand2;
var nameOfOperation;
var ShowResult;

function isNumeric(operand1) {

  return !isNaN(parseFloat(operand1)) && isFinite(operand1);

   // Метод isNaN пытается преобразовать переданный параметр в число. 
   // Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
   // isNaN("12") // false 
 }

 function isNumer(operand2) {

  return !isNaN(parseFloat(operand2)) && isFinite(operand2);
}


function IfToSwitch () {


  switch(nameOfOperation){
    case('/'):
    alert(operand1 / operand2);
    break;
    case('-'):
    alert(operand1 - operand2);
    break;
    case('+'):
    alert(+operand1 + +operand2);
    break;
    case('*'):
    alert(operand1 * operand2);
    break;     
    default:
    alert('Вы ввели неуществующую операцию');
    break;  
  }
}

function end(){
  if (confirm("Вы уверены?")) {
    alert("ну и ладно!")
  } else {
    alert("Вы нажали кнопку отмена")
  }
}


function allRightEnd(){
  nameOfOperation=prompt('Введите название операции','');
  ShowResult=confirm("Показывать результат?");
     if (ShowResult) {
      IfToSwitch ();
    }
}



operand1=prompt('введите 1 число','');

if(isNumeric(operand1)) {
  operand2=prompt('введите 2 число','');

  if(isNumer(operand2)) {

    if (operand2 == '0'){
      if(nameOfOperation == '/'){
        alert('Вы не можете делить на 0, вернемся к началу');
        while(operand2=='0'){
         operand2=prompt('введите 2 число','');
       }
     }

   allRightEnd();
  }  
  else{
    nameOfOperation=prompt('Введите название операции','');
    ShowResult=confirm("Показывать результат?")
    if (ShowResult) {
      IfToSwitch ();
    }
    else{
      end();
    }
  }

}
else{
  alert("Вы ввели не числовое значение, попробуйте еще раз");
  while(!isNumer(operand2)) {
    operand2=prompt('введите 2 число','')
  }

  alert('Вы ввели' + ' ' +operand2);
  alert('Наконец-то');

  nameOfOperation=prompt('Введите название операции','');
  ShowResult=confirm("Показывать результат?")
  if (ShowResult) {
    IfToSwitch ();
  }
}
}

else{
  alert("Вы ввели не числовое значение, попробуйте еще раз");
  while(!isNumeric(operand1)) {
    operand1=prompt('введите 1 число','')
  }
  alert('Вы ввели' + ' ' +operand1); 
  alert('Наконец-то');
  operand2=prompt('введите 2 число','');

  if(isNumer(operand2)) {

    //if (operand2 == 0 && nameOfOperation == '/'){
     // alert('Вы не можете делить на 0, вернемся к началу');
      //while(operand2==0 && nameOfOperation=='/'){
     //  operand2=prompt('введите 2 число','');
    // }
    nameOfOperation=prompt('Введите название операции','');
    ShowResult=confirm("Показывать результат?")
    if (ShowResult) {
      IfToSwitch ();
    }
  }
  //если ор2 не выполнился, были введены не числа, то мы опять выводим сообщение,
  //что введены не числовые значения и делаем проверку.
  else{

    alert("Вы ввели не числовое значение, попробуйте еще раз");
    while(!isNumer(operand2)) {
      operand2=prompt('введите 2 число','')
    }

    alert('Вы ввели' + ' ' +operand2);
    alert('Наконец-то');

    nameOfOperation=prompt('Введите название операции','');
    ShowResult=confirm("Показывать результат?")
    if (ShowResult) {
      IfToSwitch ();
    }
    else{
    end();
  }

}

}













