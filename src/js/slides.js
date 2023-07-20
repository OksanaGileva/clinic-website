'use strict';


const buttons = document.querySelectorAll('[data-button-slider]');


buttons.forEach((btn) => {
	btn.addEventListener('click', switchSlider)
})

function switchSlider () {
	const slides = document.querySelector('.slides');
	const activeSlide = document.querySelector('[data-active]')
	let newActiveSlide = [...slides.children].indexOf(activeSlide) + 1;
	if (newActiveSlide < 0) {
		newActiveSlide = slides.children.length - 1
	}
	if (newActiveSlide >= slides.children.length) {
		newActiveSlide = 0
	}
	slides.children[newActiveSlide].dataset.active = true;
	delete activeSlide.dataset.active
}

setInterval(() => {
	switchSlider ()
}, 3000)
