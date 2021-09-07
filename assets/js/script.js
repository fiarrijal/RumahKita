const menu = document.querySelector(`.menu`);
const hamburger = document.getElementById(`hamburger`);

hamburger.addEventListener('click', function () {
	menu.classList.toggle(`responsive`);
})