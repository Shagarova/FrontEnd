var operand1;
var operand2;
var nameOfOperation;
var ShowResult;

function Hello(){
  alert('Добрый день. Сегодня мы будем с вами считать на калькуляторе');
}

function GoodBye(){
  alert('Спасибо за работу. Всего доброго!');
}


function isNumeric(operand1) {
  return !isNaN(parseFloat(operand1)) && isFinite(operand1);
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
   // default:
   // alert('Вы ввели неуществующую операцию');
   // break;  
  }
}

function StartAgain(){
              operand1=prompt('введите 1 число','');
              //если введено число, то просим ввести 2 число
              if (isNumeric(operand1)){
                operand2=prompt('введите 2 число','')
                if(isNumer(operand2)) {
                  nameOfOperation=prompt('Введите название операции','');
                                    OperationNameVerification();
                                    CheckForNull();
                  ShowResult=confirm("Показывать результат?");
                      //если мы соглашаемся на показ результата, то его показывают, 
                      //иначе выбрасывают в конец и все начинается заново
                      if (ShowResult) {
                        IfToSwitch ();
                        GoodBye();
                      }
                      else{
                        StartAgain();
                      }
                    }
                  //если ор2 не выполнился, были введены не числа, то мы опять выводим сообщение,
                  //что введены не числовые значения и делаем проверку.
                else{
                  alert("Вы ввели не числовое значение, попробуйте еще раз");
                  while(!isNumer(operand2)) {
                  operand2=prompt('введите 2 число','')
                }
                //если мы ввели числовые значения, то нам показывают какое значение мы ввели и просят ввести 
                //название операции, затем если мы просим показать результат, то результат показывают иначе выбрасывают
                //в конец
                  alert('Вы ввели' + ' ' +operand2);
                  alert('Наконец-то');
                   nameOfOperation=prompt('Введите название операции','');
                                        OperationNameVerification();
                                        CheckForNull();
                  ShowResult=confirm("Показывать результат?");
                  if (ShowResult) {
                    IfToSwitch ();
                    GoodBye();
                  }
                  else{
                    StartAgain();
                  }
                }
              }
              //если операнд1 не выполнился и мы ввели не число, то нас просят ввести значение еще раз до тех пор,
              // пока мы не введем число, после этого нас попросят ввести число2
              else{
               alert("Вы ввели не числовое значение, попробуйте еще раз");
                while(!isNumeric(operand1)) {
                  operand1=prompt('введите 1 число','')
                }
                alert('Вы ввели' + ' ' +operand1); 
                alert('Наконец-то');
                operand2=prompt('введите 2 число','');
                if(isNumer(operand2)) {
                   nameOfOperation=prompt('Введите название операции','');

                                    OperationNameVerification();
                                    CheckForNull();
                  ShowResult=confirm("Показывать результат?");
                      //если мы соглашаемся на показ результата, то его показывают, иначе выбрасывают в конец.
                      if (ShowResult) {
                        IfToSwitch ();
                        GoodBye();
                      }
                      else{
                        StartAgain();
                      }
                    }
              //если ор2 не выполнился, были введены не числа, то мы опять выводим сообщение,
                  //что введены не числовые значения и делаем проверку.
                else{
                  alert("Вы ввели не числовое значение, попробуйте еще раз");
                  while(!isNumer(operand2)) {
                  operand2=prompt('введите 2 число','')
                }
                //если мы ввели числовые значения, то нам показывают какое значение мы ввели и просят ввести 
                //название операции, затем если мы просим показать результат, то результат показывают иначе выбрасывают
                //в конец
                  alert('Вы ввели' + ' ' +operand2);
                  alert('Наконец-то');
                   nameOfOperation=prompt('Введите название операции','');

                                OperationNameVerification();
                                CheckForNull();

                  ShowResult=confirm("Показывать результат?");
                  if (ShowResult) {
                    IfToSwitch ();
                    GoodBye();
                  }
                  else{
                    StartAgain();
                  }
                }    
              }
}


function CheckForNull(){
  if (operand2 == '0'){
    if(nameOfOperation == '/'){
      alert('Вы не можете делить на 0, вновь введите 2 число');
      while(operand2=='0'){
        operand2=prompt('введите 2 число','');
      }
    }
  }  
}

function OperationNameVerification(){
if (nameOfOperation != '*' && nameOfOperation != '/' && nameOfOperation != '+' && nameOfOperation != '-') {
      alert( 'Вы ввели несуществующее название операции, попробуйте еще раз' );
      while(nameOfOperation != '*' && nameOfOperation != '/' && nameOfOperation != '+' && nameOfOperation != '-')
        nameOfOperation=prompt('Введите название операции','');
    }
}

//начало программы
//просим ввести 1 число
Hello();
operand1=prompt('введите 1 число','');

//если введено число, то просим ввести 2 число

if (isNumeric(operand1)){
    operand2=prompt('введите 2 число','')

    if(isNumer(operand2)) {
      nameOfOperation=prompt('Введите название операции','');

                        OperationNameVerification();
                        CheckForNull();

      ShowResult=confirm("Показывать результат?");

          //если мы соглашаемся на показ результата, то его показывают, 
          //иначе выбрасывают в конец и все начинается заново
          if (ShowResult) {
            IfToSwitch ();
            GoodBye();
          }
          else{
            StartAgain();
          }
        }

      //если ор2 не выполнился, были введены не числа, то мы опять выводим сообщение,
      //что введены не числовые значения и делаем проверку.
    else{
      alert("Вы ввели не числовое значение, попробуйте еще раз");
      while(!isNumer(operand2)) {
      operand2=prompt('введите 2 число','')
    }
    //если мы ввели числовые значения, то нам показывают какое значение мы ввели и просят ввести 
    //название операции, затем если мы просим показать результат, то результат показывают иначе выбрасывают
    //в конец

      alert('Вы ввели' + ' ' +operand2);
      alert('Наконец-то');
       nameOfOperation=prompt('Введите название операции','');
                            OperationNameVerification();
                            CheckForNull();

      ShowResult=confirm("Показывать результат?");

      if (ShowResult) {
        IfToSwitch ();
        GoodBye();
      }
      else{
        StartAgain();
      }
    }
}


//если операнд1 не выполнился и мы ввели не число, то нас просят ввести значение еще раз до тех пор,
// пока мы не введем число, после этого нас попросят ввести число2

else{

  alert("Вы ввели не числовое значение, попробуйте еще раз");
  while(!isNumeric(operand1)) {
    operand1=prompt('введите 1 число','')
  }
  alert('Вы ввели' + ' ' +operand1); 
  alert('Наконец-то');
  operand2=prompt('введите 2 число','');

  if(isNumer(operand2)) {
     nameOfOperation=prompt('Введите название операции','');

                      OperationNameVerification();
                      CheckForNull();

    ShowResult=confirm("Показывать результат?");

        //если мы соглашаемся на показ результата, то его показывают, иначе выбрасывают в конец.
        if (ShowResult) {
          IfToSwitch ();
          GoodBye();
        }
        else{
          StartAgain();
        }
      }
//если ор2 не выполнился, были введены не числа, то мы опять выводим сообщение,
    //что введены не числовые значения и делаем проверку.
  else{
    alert("Вы ввели не числовое значение, попробуйте еще раз");
    while(!isNumer(operand2)) {
    operand2=prompt('введите 2 число','')
  }
  //если мы ввели числовые значения, то нам показывают какое значение мы ввели и просят ввести 
  //название операции, затем если мы просим показать результат, то результат показывают иначе выбрасывают
  //в конец

    alert('Вы ввели' + ' ' +operand2);
    alert('Наконец-то');
     nameOfOperation=prompt('Введите название операции','');

                  OperationNameVerification();
                  CheckForNull();

    ShowResult=confirm("Показывать результат?");
    if (ShowResult) {
      IfToSwitch ();
      GoodBye();
    }
    else{
      StartAgain();
    }
  }  
}