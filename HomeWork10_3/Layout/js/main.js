
$('#agree').click(function() {
    var agree = $('#agree');
    if (agree.attr("checked")) {
        agree.removeAttr("checked");
    } else {
        agree.attr("checked","checked");
    }
});

$('#registration').click(function() {
    var registration = $('#registration');
    if (registration.attr("checked")) {
        registration.removeAttr("checked");
    } else {
        registration.attr("checked","checked");
    }
});





    function button(){ //делаем кнопку активной

        if ($('#agree').prop("checked") == true||($('#registration').prop("checked") == true)){
            $('button').removeAttr("disabled");
            return true;
        }
        return false;
    }


    function randomNumber(m,n){  // функция для генерации случайных чисел в диапазоне от m до n
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor( Math.random() * (n - m + 1) ) + m;
    };


    function capcha(){

        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.id='capcha';
        form.insertBefore(newInput, form.lastChild);
        
        var A = randomNumber(1,100); // генерируем число
        var B = randomNumber(1,100); // генерируем число
        var sumAB = A + B;  // вычисляем сумму
        document.getElementById('capcha').placeholder = 'Сколько будет'+' ' + A + ' + ' + B + ' ? ';  // показываем пользователю выражение
 
        $('#capcha').keyup(function(event){
            event = event || window.event;
            if (event.keyCode === 13) {
              var Value = $('#capcha').val();
              console.log(sumAB);
              console.log(Value);
              if (Value==sumAB){
               $('button').removeAttr("disabled");
               $('#capcha').remove().fadeOut(400);
               console.log('pravda');
               $('.modal.ErrorValue').fadeOut(600); 
               return true;
           }
           else if (Value!==sumAB){
            showErrorValue();
            console.log('Вы не умеете считать');
        }
    }
    return false;  
});

        
    };


$(function() {
   $('#agree').one('change',function(){  
    if($('#registration').one('change',capcha)){
        return true; 
    }
    console.log('ne vishlo');
    return false; 
});
});

// document.querySelector("#username").addEventListener("keyup", validateName);
// document.querySelector("#email").addEventListener("focus", validateEmail);
// document.querySelector("#password").addEventListener("focus", validatePassword);
// document.querySelector("#repeatPassword").addEventListener("focus", validateRepeatPassword);





   function validateName(){

      if ($('#username').val() ===''){
          showErrorUserName();
           return false;
      }
      else if ($('#username').val().length<=3){
          showErrorUserNameTwo();
             return false;
      }
      else{

        $('.modal.ErrorUserName').fadeOut(200, function(){$(this).remove()});
        $('.modal.ErrorUserNameTwo').fadeOut(600, function(){$(this).remove()}); 
         return true;
   };
 };

  function validateEmail(){
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

      if($('#email').val() === ''){
        showErrorEmail();
           return false;
      }
      else if($('#email').val().search(pattern) !== 0){
         showErrorEmailTwo();
           return false;
      }
       else{
         $('.modal.ErrorEmail').fadeOut(200, function(){$(this).remove()});
        $('.modal.ErrorEmailTwo').fadeOut(600, function(){$(this).remove()});
         return true;
    };
  };

 function validatePassword(){
    if($('#password').val()===''){
          showErrorPassword();
           return false;
    }

    else if($('#password').val().length<=6){
          showErrorPasswordTwo();
           return false;
    }
     else{
       $('.modal.ErrorPassword').fadeOut(200, function(){$(this).remove()});
        $('.modal.ErrorPasswordTwo').fadeOut(600, function(){$(this).remove()});
          return true;
    };
  }

    function validateRepeatPassword(){
    if($('#repeatPassword').val()===''){
          showErrorRepeatPasswordEmpty();
           return false;
    }

    else if($('#repeatPassword').val()!==($('#password').val())){
            showErrorRepeatPassword();
          return false;
    }
     else{
       $('.modal.ErrorRepeatPasswordEmpty').fadeOut(200, function(){$(this).remove()});
        $('.modal.ErrorRepeatPassword').fadeOut(600, function(){$(this).remove()});
          return true;

    };
  }







function showErrorUserName(){
    $('body').append('<div class="modal ErrorUserName">Пустое поле </div>');
     // $('.modal.ErrorUserName').fadeOut(200, function(){
     //  if (validateName()){
     //    $(this).remove()
     //  }
      // });
     
}
function showErrorUserNameTwo(){
    $('body').append('<div class="modal ErrorUserName">Количество символов меньше допустимого </div>');
      // $('.modal.ErrorUserNameTwo').fadeOut(600, function(){$(this).remove()}); 
}
function showErrorEmail(){
    $('body').append('<div class="modal ErrorEmail">Вы не вели email!</div>');
}
function showErrorEmailTwo(){
    $('body').append('<div class="modal ErrorEmailTwo">Ваш email не корректен!</div>');
}
function showErrorPassword(){
    $('body').append('<div class="modal ErrorPassword">Пустое поле</div>');
}
function showErrorPasswordTwo(){
    $('body').append('<div class="modal ErrorPassword">Количество символов меньше допустимого</div>');
}
function showErrorRepeatPasswordEmpty(){
    $('body').append('<div class="modal ErrorRepeatPasswordEmpty">Пустое поле</div>');
}
function showErrorRepeatPassword(){
    $('body').append('<div class="modal ErrorRepeatPassword">Ваши пароли не совпадают </div>');
}


function showErrorValue(){
    $('body').append('<div class="modal ErrorValue">Wrong </div>');

}

function showSuccess(){
   $('body').append('<div class="modal Success">Регистрация прошла успешно </div>');
   $('.modal.Success').fadeIn(1000).delay(3000).fadeOut(1000, function(){$(this).remove()});

}


document.querySelector("#buttonRegistration").addEventListener("click", validateName);
document.querySelector("#buttonRegistration").addEventListener("click", validateEmail);
document.querySelector("#buttonRegistration").addEventListener("click", validatePassword);
document.querySelector("#buttonRegistration").addEventListener("click", validateRepeatPassword);

$('#buttonRegistration').click(function(){
 if(validateName()&&validateEmail()&&validatePassword()&&validateRepeatPassword()){
  // document.querySelector("#buttonRegistration").addEventListener("click",showSuccess );
  showSuccess();
 }
})
// $('#buttonRegistration').click(function(){
//     // if(validateName()&&validateEmail()&&validatePassword()){
//       if (validate()){ 
//         showSuccess();
//     }
// })











