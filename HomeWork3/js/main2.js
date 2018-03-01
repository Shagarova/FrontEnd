var result;
var i;


function isNumeric() {
  return !isNaN(parseFloat()) && isFinite();
}

function Calculator() {
 this.mult= function multiply(){
     result=1;
     for( i=0;i< arguments.length;i++) {
        result *=arguments[i];
    }
    return result;
};

this.sum= function summa(){
 result=0;
 for( i=0;i< arguments.length;i++) {
    result +=arguments[i];
}
return result;
},
this.dif= function difference(){
 result=arguments[0];
 for( i=1;i< arguments.length;i++) {
    result -=arguments[i];
}
return result;
},

this.div= function division(){
    if (isNumeric()){
      result=arguments[0];
      for( i=1;i< arguments.length;i++) {
        result /=arguments[i];
    }
    return result;
}
else{
    console.log('Вы ввели неверное значение');
}

},
this.power= function power(x,y){
   result=x;
   for (i=0; i<y; i++) {
    result*=x;
}
return result;
},
this.factorial= function factorial(x){
   return (x!=1) ? x*factorial(x-1) :1;
}
}

var calculator = new Calculator();








