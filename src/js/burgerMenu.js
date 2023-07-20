'use strict'

const burgerMenu = document.querySelector('.burger');

const thisMenu = document.querySelector('.menu');

const receptionButton = document.querySelector('.btn--reception');



function showTheMenu() {
	this.classList.toggle('active');
	thisMenu.classList.toggle('open');
	receptionButton.classList.toggle('open-position');
}

burgerMenu.onclick = function(){
	const html = document.querySelector("html");
	html.classList.toggle("unscroll")
}

burgerMenu.addEventListener('click', showTheMenu);