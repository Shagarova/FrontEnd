var operand1=prompt('');
var operand2=prompt('');

//var value= typeof +prompt('')=== 'number' ? 'it\'s a number' : 'not a number';
//console.log(typeof value);
//if(value<100 && value >50 && value !=30){
 //   console.log('value is 60-100');
//}  
//else {
//    console.log('less then 50');
//}



//if(value100 || value <50){
//    console.log('value is 60-100');
//}  
//else {
//    console.log('less then 50');
//}

switch(value){
    case('/'):
       alert(operand1 / operand2);
        break;
   case('+'):
    alert(+operand1 + +operand2);
        break;
    case('*'):
    alert(operand1 * operand2);
        break;
   default:
      alert('wrong operation');
       break;
}

//var itemFromSomePlace;
//var item;
//var item = itemFromSomePlace ? itemFromSomePlace : (name:'John', lastname:'Doe');

//if(itemFromSomePlace == true){
  //  item=itemFromSomePlace;
///} else {
//    item={
  //      name:'John',
 //       lastname:'Doe'
 //   }
//}
//alert(item.name+''+item.lastname);

//var operand1=prompt('');
//var operand2=prompt('');

//while(operand1 < 20){
   // operand1++;
    //console.log(operand1);

    //if (operand1==10){
   //     break;
   // }
//}


//do{
 //   operand1++;
  //  console.log(operand1);
//} while(operand1<20);


//for(; operand1 <= 20; operand1++){
 //   console.log(operand1);
//}

    
   // var multiply=function(number1){
      
       // return  function(number2){
       //     if(typeof number2==='undefined')
         //   return number1;
         //   else 
       // return number1 * number2;
      //  };
     
  // }
//console.log(multiply(5)(6));


//var greeting=myLog(name,age);
//alert(myLog());

//function myLog(){
//    console.log('Hello');

//}
//console.log(myLog);


console.log(Math.pow(5,3));
console.log(Math.sqrt(16));

console.log(Math.abs(-16));

console.log(Math.round(3.14555));
console.log(Math.ceil(3.14555));
console.log((3.1455538475).toFixed(3));
console.log(Math.min(5,6,3,8));
console.log(Math.max(5,6,3,8));


console.log(Math.floor((Math.random()*100)+1));