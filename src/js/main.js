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
		output = document.querySelector('.pass-gen__output input'),
		meter = document.querySelector('.pass-control__safety .progress-bar'),
		icon = document.querySelector('.pass-control__icon');
	if(btn !== null) {
		const randNum = (min, max) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		btn.addEventListener('click', function () {
			output.value = randNum(1, 120)
			let length = output.value.length
			meter.style.width = `${length * 33.333}%`
			meter.classList.remove('bg-danger', 'bg-warning', 'bg-success')
			icon.classList.remove('bg-danger', 'bg-warning', 'bg-success')
			if (length == 1) {
				
				meter.classList.add('bg-danger')
				icon.classList.add('bg-danger')
			} else if (length == 2) {
				meter.classList.add('bg-warning')
				icon.classList.add('bg-warning')
			} else if (length == 3) {
				meter.classList.add('bg-success')
				icon.classList.add('bg-success')
			}
		})
	}
}
{
	// pass length
	let counter = document.querySelector('.pass-control__length');

	if(counter !== null) {
		let input = counter.querySelector('input'),
			incr = counter.querySelector('[name="incr"]'),
			decr = counter.querySelector('[name="decr"]');
			
		counter.addEventListener('click', function (e) {
			if (e.target == incr) {
				input.value++
	
				if (input.value >= 16) {
					incr.disabled = true
				}
				decr.disabled = false
			} else if (e.target == decr) {
				input.value--
	
				if (input.value <= 1) {
					decr.disabled = true
				}
				incr.disabled = false
			}
		})
	}
}
