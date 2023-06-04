import '../styles.scss'

document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.menu').classList.toggle('open')
	document.querySelector('.btn--reception').classList.toggle('open')
	document.querySelector('.btn--reception').classList.toggle('open-position')
})
let html = document.querySelector("html")
document.querySelector(".burger").onclick = function(){
	html.classList.toggle("unscroll")
}

