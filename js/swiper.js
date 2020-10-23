let button = document.querySelector('.modal-container__button');
let container = document.querySelector('.swiper-wrapper');
let containerElements = container.children;

function checkingInnerWidth() {
	if (767 < window.innerWidth && window.innerWidth < 1120) {
		for (let i = 6; i < containerElements.length; i++) {
			containerElements[i].style.display = "none";
		}
	} else if (window.innerWidth > 1119) {
		containerElements[6].style.display = "";
		containerElements[7].style.display = "";
		for (let i = 8; i < containerElements.length; i++) {
			containerElements[i].style.display = "none";
		}
	}
};

checkingInnerWidth();

container.classList.remove('swiper-container__swiper-wrapper--hidden');

button.addEventListener('click', function() {
	if (button.textContent == 'Показать все') {
		button.textContent = 'Скрыть';
		button.classList.add('modal-container__button--reverse');
		for (let i = 6; i < containerElements.length; i++) {
			containerElements[i].style.display = "";
		}
		return;
	}
	button.textContent = 'Показать все';
	button.classList.remove('modal-container__button--reverse');
	checkingInnerWidth();
});

window.addEventListener('resize', function() {
	if (button.textContent == 'Показать все') {
		checkingInnerWidth();
	}
});