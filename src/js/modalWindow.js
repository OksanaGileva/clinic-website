'use strict';

const modal = document.querySelector('#modal');

const closedTheModal = document.querySelector('#modal-close');

const openedTheModal = document.querySelectorAll('.reception');



closedTheModal.addEventListener('click', function (){
	modal.classList.add('close');
	setTimeout(function() {
		modal.classList.remove('open');
		modal.classList.remove('close');
	}, 500);
});

openedTheModal.forEach(el => {
	el.addEventListener('click', function (event){
		modal.classList.add('open');
		event.preventDefault();
	});
})