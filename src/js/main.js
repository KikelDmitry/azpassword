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
{
	//passgen
	let btn = document.querySelector('.pass-control__generate'),
		output = document.querySelector('.pass-gen__input'),
		meter = document.querySelector('.pass-control__safety-bar');
	const randNum = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	btn.addEventListener('click', function () {
		output.value = randNum(1, 120)
		let length = output.value.length
		meter.style.transform = `scaleX(${length * 0.333})`
		meter.classList.remove('is-danger', 'is-warning', 'is-safe')
		if (length == 1) {
			meter.classList.add('is-danger')
		} else if (length == 2) {
			meter.classList.add('is-warning')
		} else if (length == 3) {
			meter.classList.add('is-safe')
			
		}
	})
}
