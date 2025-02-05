const scriptURL =
	'https://script.google.com/macros/s/AKfycbzuB9KkgRiF--onOqHl2qM9K9LKpK6H6tNdTDbAiTSXtschJL-XzqvJMKRvrdKkFXXveA/exec';

const form = document.forms['email-form'];

form.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then((response) => alert('Mange tak! Din E-mail er registreret'))
		.then(() => {
			window.location.reload();
		})
		.catch((error) => console.error('Error!', error.message));
});
