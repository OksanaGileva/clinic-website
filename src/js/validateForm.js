'use strict';


document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('#form');
	const submitButton = document.querySelector('#modal-submit');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		sendForm();
	});

	submitButton.addEventListener('click', function () {
		sendForm();
	});

	async function sendForm() {
		let error = await formValidate(form);

		let formData = new FormData(form);
		console.log(formData)

		if (error === 0) {
			let response = await fetch('https://PROJECT_TOKEN.mockapi.io/send', {
				method: 'POST',
				headers: {'content-type':'application/json'},
				body: formData,
			});

			if (response.ok) {
				// form.classList.add('__loading');
				let result = await response.json();
				alert(result.message);
				form.reset();
			}
			else {
				alert('Возкникла ошибка, попробуйте еще.')
			}
		}
		else {
			alert('Заполните все поля!')
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.__req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			removeFormError(input);

			if (input.classList.contains('__email')) {
				if (!isEmailValidate(input)) {
					addFormError(input);
					error++;
				}
			}
			else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
				addFormError(input);
				error++;
			}
			else {
				if (input.value === '') {
					addFormError(input);
					error++;
				}
			}
		}

		return error;
	}

	function addFormError(input) {
		input.parentElement.classList.add('__error');
		input.classList.add('__error');
	}

	function removeFormError(input) {
		input.parentElement.classList.remove('__error');
		input.classList.remove('__error');
	}

	function isEmailValidate(input) {
		const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		return EMAIL_REGEXP.test(input.value);
	}
})