var result;
var i;

var calculator={
    mult: function multiply(){
         result=1;
        for( i=0;i< arguments.length;i++) {
            result *=arguments[i];
        }
        return result;
    },

    sum: function summa(){
         result=0;
        for( i=0;i< arguments.length;i++) {
            result +=arguments[i];
        }
        return result;
    },
    dif: function difference(){
         result=arguments[0];
        for( i=1;i< arguments.length;i++) {
            result -=arguments[i];
        }
        return result;
    },

    div: function division(){
         result=arguments[0];
        for( i=1;i< arguments.length;i++) {
            result /=arguments[i];
        }
        return result;
    },
    power: function power(x,y){
       result=x;
        for (i=0; i<y; i++) {
            result*=x;
        }
        return result;
    },
    factorial: function factorial(x){
       return (x!=1) ? x*factorial(x-1) :1;
   }


}





// var calculator={
//     sum:function(){
//         return this.a+this.b;
//    },
//    mul:function(){
//         return this.a*this.b;
//    },
//    read:function(){
//         this.a=+prompt('a','');
//         this.b=+prompt('b','');
//    }
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());




