
    //    $('form').submit(function(e){
    //     e.preventDefault();

    //     if ($('#username').val() ==='') {
    //         alert('pystoe pole');
    //     };

    //     if ($('#email').val() ==='') {
    //         alert('pystoe pole');
    //     };

    // });

     //   if ($('#email').val() ===''){
        //     showError();
        //     return false;
        // }







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


function validate(){

function validateName(){

    if ($('#username').val() ===''){
        showErrorUserName();
        // return false;
    }
     else if ($('#username').val().length<=3){
        showErrorUserNameTwo();
        // return false;
    }
    else{
     $('.modal.ErrorUserName').fadeOut(600); 
 };
}

function validateEmail(){
var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

  if($('#email').val() === ''){
    showErrorEmail();
    // return false;
  }
   else{
    $('.modal.ErrorEmail').fadeOut(600); 
};

    if($('#email').val().search(pattern) !== 0){
     showErrorEmailTwo();
     // return false;
  }
   else{
    $('.modal.ErrorEmailTwo').fadeOut(600); 
};
}

function validatePassword(){
if($('#password').val()===''){
      showErrorPassword();
    // return false;
}
 else{
    $('.modal.ErrorPassword').fadeOut(600); 
};

if($('#password').val().length<=6){
      showErrorPassword();
    return false;
}
 else{
    $('.modal.ErrorPassword').fadeOut(600); 
};


if ($('#repeatPassword').val() ===''||($('#repeatPassword').val()!==$('#password').val())){
    showErrorRepeatPassword();
    return false;
} else{
   $('.modal.ErrorRepeatPassword').fadeOut(600);
};
}


}


function showErrorUserName(){
    $('body').append('<div class="modal ErrorUserName">Пустое поле </div>');

}
function showErrorUserNameTwo(){
    $('body').append('<div class="modal ErrorUserName">Количество символов меньше допустимого </div>');

}
function showErrorPassword(){
    $('body').append('<div class="modal ErrorPassword">Количество символов меньше допустимого</div>');
}
function showErrorRepeatPassword(){
    $('body').append('<div class="modal ErrorRepeatPassword">Ваши пароли не совпадают </div>');
}

function showErrorAgree(){
    $('body').append('<div class="modal ErrorAgree">Дайте свое согласие на обработку данных!</div>');
}
function showErrorRegistration(){
    $('body').append('<div class="modal ErrorRegistration">Вы не подтвердили свое желание зарегистрироваться!</div>');
}
function showErrorEmail(){
    $('body').append('<div class="modal ErrorEmail">Вы не вели email!</div>');
}
function showErrorEmailTwo(){
    $('body').append('<div class="modal ErrorEmailTwo">Ваш email не корректен!</div>');
}

function showErrorValue(){
    $('body').append('<div class="modal ErrorValue">Wrong </div>');

}
function showSuccess(){

   $('.modal.ErrorAgree').fadeOut(1000);
   $('.modal.ErrorRegistration').fadeOut(1000);

   $('body').append('<div class="modal Success">Регистрация прошла успешно </div>');

   $('.modal.Success').fadeIn(1000).delay(3000).fadeOut(1000, function(){$(this).remove()});

}




$('#buttonRegistration').click(function(){
    if(validate()){
        
 return true;
        showSuccess();
    }
})











