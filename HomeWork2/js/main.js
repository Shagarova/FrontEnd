var operand1=prompt('Введите первое число','');

if (typeof operand1=='string'){
  var operand2=prompt('Введите второе число','');
  if (typeof operand2=='string'){
    var value=prompt('Введите название операции','');

        
    var ShowResult=confirm("Показывать результат?sdfsefs") {
      switch(value){
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
        alert('Вы ввели неправильную операцию');
         break;  
     }
  }
  else if (operand2 === 0 && value =='/'){
alert('деление на 0 запрещено')
  }
  else{
    operand1=prompt('Введите первое число','');
  }
    }
  else{
    alert('Вы ввели значение неверного типа');
  }
 }
else{
  alert('Вы ввели значение неверного типа');
}

