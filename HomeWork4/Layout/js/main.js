

 function GetIdOne(newColor) {
 	var item = document.getElementById("mobile");
 	item.style.color = newColor;
 	console.log('Пункт меню' +' ' + item.innerText + ' '+' теперь цвета'+' ' + newColor);
 }

 function GetIdTwo(newColor) {
 	var item = document.querySelector("#mobile");
 	item.style.color = newColor;
 	console.log('Пункт меню' +' ' + item.innerText + ' '+' теперь цвета'+' ' + newColor);
 }



 function ItemsNav(newColor) {
 	var item = document.getElementsByClassName('.items-nav');
 	var lastitem=item.lastElementChild;
 	var firstitem=lastitem.firstElementChild;
 	firstitem.style.color = newColor;
 	console.log('Пункт меню' +' ' + lastitem.innerText + ' '+' теперь цвета'+' ' + newColor);

 }

// function Tags(newColor) {
// var items = document.querySelector('.items-nav');
// var item =items.getElementsByTagName('li')[5];
// var a =item.getElementsByTagName('a')[0];
// a.style.color = newColor;
// console.log('Пункт меню' +' ' + a.innerText + ' '+' теперь цвета'+' ' + newColor);

// }

function Tags(newColor) {
	var items = document.getElementsByTagName('ul')[1];
	var item =items.getElementsByTagName('li')[5];
	var a =item.getElementsByTagName('a')[0];
	a.style.color = newColor;
	console.log('Пункт меню' +' ' + a.innerText + ' '+' теперь цвета'+' ' + newColor);

}



/*4 задание в 1 строку*/
function GetIdThree(newColor) {
	var item= document.getElementById("mobile").style.color = newColor;
	console.log('Пункт меню' +' ' +  item.innerText + ' '+' теперь цвета'+' ' + newColor);
}

function GetIdFour(newColor) {
	var item= document.querySelector("#mobile").style.color = newColor;
	console.log('Пункт меню' +' ' +   item.innerText + ' '+' теперь цвета'+' ' + newColor);
}



function ItemsNavTwo(newColor) {
	var item=document.querySelector('.items-nav').lastElementChild.firstElementChild.style.color=newColor;
	console.log('Пункт меню' +' ' + item.innerText + ' '+' теперь цвета'+' ' + newColor);

}


function TagsTwo(newColor) {
	var item = document.getElementsByTagName('ul')[1].getElementsByTagName('li')[5].getElementsByTagName('a')[0].style.color=newColor;
	console.log('Пункт меню' +' ' + item.innerText + ' '+' теперь цвета'+' ' + newColor);

}




var result=0;

function countTags(a, b,isRecursive) {
	
	if (a.hasChildNodes()) {
		
		var child = a.children;
		for(var i=0; i < child.length; i++){
			if (child[i].matches(b)){
				result++;
			}
			if (child[i].hasChildNodes()) {
				countTags(child[i], b, true);
			}
		}

	}

	if (!isRecursive) {
		var result1 = result;
		result=0;
	}
	return result1;

}



















