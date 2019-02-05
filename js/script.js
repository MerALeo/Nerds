window.onload = function() {

	let modal = document.querySelector('.modal');
	let close = document.querySelector('.modal img');
	let btn = document.querySelector('.contacts .button');
	let form = document.querySelector('form');
	let inputs = document.querySelectorAll('.form-inputs input');
	let textarea = document.querySelector('form textarea');

	form.addEventListener('submit', function(e) {

		for (var i = 0; i < inputs.length; i++) {
			if (!inputs[i].value) {
				e.preventDefault();
				inputs[i].classList.add('modal-error');
			} else {
				inputs[i].classList.remove('modal-error');
			}
		}

		if(!textarea.value) {
				e.preventDefault();
				textarea.classList.add('modal-error');
			} else {
				textarea.classList.remove('modal-error');
			}
	});

	btn.addEventListener('click', function(e) {
		e.preventDefault();
		modal.classList.add('modal-show');
	});

	close.addEventListener('click', function(e) {
		e.preventDefault();
		modal.classList.remove('modal-show');
	});
}