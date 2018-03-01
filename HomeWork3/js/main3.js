// function calc(){
//   return{
//     sum:function(){

//     },
//      mult:function(){

//     },
//   };
// }

// calc().sum(1,2,3,4,5)

// function factorial(num){
//   var result = 1;
//   for(var i=1; i <= num; i++){
//     result =num * i;
//   }
// }

function factorial(num){
  if (num == 0){
    return 1;
  }
  else{
    return num*factorial(num-1);
  }
}

factorial(4);