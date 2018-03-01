
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

// var str = "abcdefgjiklmnopqrstuwxyzABCDEFGJIKLMNOPQRSTUWXYZ";
    // var re= /[A-D]/gi; //и прописные и загавные. если g - только заглавные
    // var matchesArray = str.match(re);
    // console.log(matchesArray);







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
        form.appendChild(newInput);
        newInput.magrinTop=30;
            
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
                 return true;
             }
             else if (Value!==sumAB){
               console.log('Вы не умеете считать');
               
           }

       }
     return false;  
   });

        
    };










// $(function() {
//     if($('#agree').prop("checked") == true) {
//         // function(){
//         // if($('#registration').prop("checked") == true){
//             return true;
//             console.log("privet");
//            capcha();
//         }
//      //    }
//      // };
// });


$(function() {
   $('#agree').one('change',function(){  
    if($('#registration').one('change',capcha)){
        return true; 
    }
    console.log('ne vishlo');
    return false; 
});
});

// $(function() {
// if ( $("#agree").is(":checked") && $("#registration").is(":checked") ){
//     console.log( 'Привет всем присутствующим!' );
// }
// console.log( 'Не  всем присутствующим!' );
// });

// $('#agree').on('change', function(){ // on change of state
//    if(this.checked) // if changed state is "CHECKED"
//    {
// //     $('registration').on('change', function(){ // on change of state
// //    if(this.checked) // if changed state is "CHECKED"
// //    {
//        $('button').removeAttr("disabled");
// //        }
// // })
//   }
// })




// if ($('#agree').prop("checked") == true||($('#registration').prop("checked") == true)){
//                 alert( 'Привет всем присутствующим!' );
//                 $('button').removeAttr("disabled");
//             }
//             else{
//                 console.log('Что-то пошло не так!' );
//             }










// $('#buttonCapcha').click(function(){
//     if(capcha()){
//         showSuccess();
//     }

// });




function validate(){

    if ($('#username').val() ===''||($('#username').val().length<=3)){
        showErrorUserName();
        return false;
    }
    else{
     $('.modal.ErrorUserName').fadeOut(1000); 
 };

 if ($('#email').val() ===''){
    showErrorEmail();
    return false;
} else{
   $('.modal.ErrorEmail').fadeOut(1000); 
};


if ($('#password').val() ===''||($('#password').val().length<=6)){
    showErrorPassword();
    return false;
} else{
    $('.modal.ErrorPassword').fadeOut(1000); 
};

if ($('#repeatPassword').val() ===''||($('#repeatPassword').val()!==$('#password').val())){
    showErrorRepeatPassword();
    return false;
} else{
   $('.modal.ErrorRepeatPassword').fadeOut(1000);
};



// $('#email').on('blur', function () {
//   var email = $(this).val();

//   if (email.length > 0
//   && (email.match(/.+?\@.+/g) || []).length !== 1) {
//     console.log('invalid');
//     alert('Вы ввели некорректный e-mail!');
//   } else {
//     console.log('valid');
//     alert('Вы ввели корректный e-mail!');
//   }
// });


return true;
}


function showErrorUserName(){
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
function showSuccess(){



   $('.modal.ErrorAgree').fadeOut(1000);
   $('.modal.ErrorRegistration').fadeOut(1000);

   $('body').append('<div class="modal Success">Регистрация прошла успешно </div>');

   $('.modal.Success').fadeIn(1000).delay(3000).fadeOut(1000, function(){$(this).remove()});

}




$('#buttonRegistration').click(function(){
    if(validate()){
        showSuccess();
    }
})











