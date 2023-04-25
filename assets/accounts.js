let recoverPassword = document.querySelector('.js-recover-password'),
	recoverPasswordForm = document.querySelector('.js-recover-password-form'),
	cancelRecoverPassword = document.querySelector('.js-cancel-recover-password');

recoverPassword.addEventListener('click', function(){
	recoverPasswordForm.classList.remove('hide');
});

cancelRecoverPassword.addEventListener('click', function(){
	recoverPasswordForm.classList.add('hide');
});

let addresses = document.querySelectorAll('.js-address-container');

addresses.forEach((address) => {

	let edit = address.querySelector('.js-edit-address'),
		details = address.querySelector('.js-address'),
		form = address.querySelector('.js-address-form'),
		cancel = address.querySelector('.js-cancel-edit');

	edit.addEventListener('click', function(){
		details.classList.add('hide');
		form.classList.remove('hide');
	});

	cancel.addEventListener('click', function(){
		form.classList.add('hide');
		details.classList.remove('hide');
	});

});