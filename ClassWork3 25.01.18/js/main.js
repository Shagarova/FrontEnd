// var arr=Array(15);
// var min=1;
// var max=100;

// //var arr2=[1,2,3,5,7];

// //console.log(arr2[4]);

// var namesArray=[
//     'Jack',
//     'Den',
//     'Julia'
// ];


// for(var i = 0; i < arr.length; i++){
// arr[i]= namesArray[i];

// if(i)
// }

// console.log(arr);


// //console.log(namesArray);



//задача2


// var myString="Jack, Michael, Dan, Julia";
// var stringArray=myString.split(' , ');
// console.log(stringArray);

//задача3

// var numArray=[10, 9, 8, 5, 3, 2];
// var stringFromArray = numArray.join(' ');
// console.log(stringFromArray);


//задача4

// console.log('Hello World'.split(''.reverse().join('')));

//задача5

// var arr2=[1,2,3,5,7];

// var arrNew=arr2.slice(0, 2);

// console.log(arrNew);

//задача6
// var arr=[1,2,3,5,7];
// var arr3=[9,11,15];
// var arr2=arr.splice(3,1,45, arr3);
// console.log(arr);


//задача7
// var arr=[1,2,3,5,7];

// var arr2=arr.reverse;
// console.log(arr2);


//задача 8
// var arr=[1,2,3,5,7];
// var arr2=[10,11,12];

// var arr3=arr.concat(arr2);
// var arr4=[35, 48];
// arr3.splice(arr3.length, 0);

// console.log(arr3);


// var arr=[1,2,3,5,7];

// var index=arr.indexOf(3);
// var lastindex=arr.lastindexOf(3);

// console.log(lastindex);


// var arr = [1, 15, 2, 25, 4, 5];
// var sortArray=arr.sort(compareNumeric);

// function compareNumeric(a,b){
//     return a-b;
// }
// console.log(sortArray);




//массив с map
// var names = ['HTML', 'CSS', 'JavaScript'];


// var nameLength = names.map(function(name){
//     return name.length;
// });

// console.log(nameLength);




//массив с ForEach
// var arr = ['HTML', 'CSS', 'JavaScript'];

// arr.forEach(function(item, i, arr){
//     console.log(i + ": "+item+ "(массив: "+ arr+ ")" );
// })


//массив2 с ForEach
// var arr = [1, 2 , 3, 4, 5, 6];

// arr.forEach(function(item, index){

//     arr[index] = item*2
// } );
//     console.log(arr);



//object

var obj = {
   
    name:'edward',
    lastname: 'www',
    age:32,
    sayHello: function(){
        return 'Hello'+ this.name + '!';
    },
    work: {
        speciality:'developer',
        workaddress:'google'
    },
    toString: function(){
return 'HumansProfile'
    },
    ValueOf: function(){
        return this.age;
            },
};

obj.address='wall str.' //добавляем свойство в объект

obj['sex']= 'male'; //добавляем свойство в объект

Object.defineProperty(obj, 'home', {
    value:'MyHome',
    enumerable:true
});


for(var item in obj){
    console.log('obj[' +item+ '] =' + obj[item]);
}
//console.log(obj);
