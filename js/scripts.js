// scripts.js

function checkOnclickEvent(param) {
  console.log(param);
}

var addButtonElem = document.getElementById('addElem'),			//button +++
    removeButtonElem = document.getElementById('removeElem');	//button ---
    i = 1;

function addElement() {
	ulElem = document.getElementById('list'),
	liElem = document.createElement('li');
	liElem.appendChild(document.createTextNode('item ' + i));
	ulElem.appendChild(liElem);
	i++;
	console.log(i);
}

function removeElement() {
	console.log(i);
	if (i == 1) { 
		return null;
	} else {
		i--;
		var ulElem = document.getElementById('list');
		ulElem.removeChild(ulElem.lastChild);
		console.log(i);
	}
}

addButtonElem.addEventListener('click', addElement);
removeButtonElem.addEventListener('click', removeElement);

