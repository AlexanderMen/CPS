let button = document.querySelector('.modal-container__button');

button.addEventListener('click', function() {
	let container = document.querySelector('.modal-container__buttons');
	if (container.dataset.show === "hidden") {
		container.dataset.show = "visible";
		button.textContent = 'Скрыть';
		button.classList.add('modal-container__button--reverse');
		return;
	}
	container.dataset.show = "hidden";
	button.textContent = 'Показать все';
	button.classList.remove('modal-container__button--reverse');
})




