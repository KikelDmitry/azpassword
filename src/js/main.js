{
	// mobile menu
	let burger = document.querySelector('.header__burger'),
	menu = document.querySelector('.header__menu');

	burger.addEventListener('click', function () {
		if (!this.classList.contains('is-active')) {
			this.classList.add('is-active')
			menu.classList.add('is-active')
		} else {
			this.classList.remove('is-active')
			menu.classList.remove('is-active')

		}
	})
}
