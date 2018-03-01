function myLog(){
	console.log('Clicked');
}

var link = document.querySelector('h1 a');
// link.onclick = myLog;

// var link = document.querySelector('h1 a')
// link.ondbclick = function (){
// 	console.log('Double Clicked');
// }

// link.onmouseover = function (){
// 	console.log('Over');
// }

// link.onmouseout = function (){
// 	console.log('Out');
// }











// link.addEventListener('click', function(e){
// 	console.log(e.offsetX, e.offsetY);
// });

// link.addEventListener('click', function(){
// 	console.log('Action 2');
// });
// link.addEventListener('click', function(){
// 	console.log('Action 3');
// });




var listLinks = document.querySelectorAll('li');
listLinks.forEach(function(link){
	link.addEventListener('click', function(e){
	console.log(this);
});
})






// function action1(){
// 	console.log('Action 1');
// }
// function action2(){
// 	console.log('Action 2');
// }
// link.addEventListener('click', action1());
// link.addEventListener('click', action2());












// link.addEventListener('mouseover', function(){
// this.style.fontSize= '34px';
// this.style.color= 'green';
// });

// link.addEventListener('mouseout', function(){
// this.style.fontSize= '16px';
// this.style.color= 'black';
// });


// link.addEventListener('click', function(){
// console.log('I\'m clicked')});







// document.querySelector('div').addEventListener('mouseenter', function(event){
// console.log(event.target)});



