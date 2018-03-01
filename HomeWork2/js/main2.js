function isNumeric(operand1) {

  return !isNaN(parseFloat(operand1)) && isFinite(operand1);

   // Метод isNaN пытается преобразовать переданный параметр в число. 
   // Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
   // isNaN("12") // false 
 }

 function isNumer(operand2) {

  return !isNaN(parseFloat(operand2)) && isFinite(operand2);

  
 }
 var operand1=prompt('введите 1 число','')
 if(!isNumeric(operand1)) 
 {
   alert("Не число");
   while(!isNumeric(operand1)) {
    var operand1=prompt('введите 1 число','')
   }
   console.log(operand1);
 }
 else{
  var operand2=prompt('введите 2 число','')
  if(!isNumer(operand2)) 
  {
   alert("Не число");
   while(!isNumer(operand2)) {
    var operand2=prompt('введите 2 число','')
   }
   console.log(operand2);
 }
 else{
   var nameOfOperation=prompt('Введите название операции','');
   var ShowResult=confirm("Показывать результат?")
   if (ShowResult) {
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
  else{
    if (confirm("Вы уверены?")) {
      alert("ну и ладно!")
    } else {
      alert("Вы нажали кнопку отмена")
    }

  }
}
}