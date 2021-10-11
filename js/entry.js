const schemeSvg = document.getElementById('schemeSvg')
const price = 350
const totalPrice = document.querySelector('.price-total')
const mobBtn = document.querySelector('.m-menu')
const mobMenu = document.querySelector('.nav-list')


let activePlaces = 0

schemeSvg.addEventListener('click', svgClickHandler)
mobBtn.addEventListener('click', mobMenuClickHandler)



function svgClickHandler(e) {
	const target = e.target

	if (target && target.tagName.toLowerCase() === 'path' 
		&& !target.classList.contains('booked')) {
		if (!target.classList.contains('active')) {
			activePlaces++
		} else {
			activePlaces--
		}
		target.classList.toggle('active')
	}

	totalPrice.textContent = price * activePlaces

}

function mobMenuClickHandler(e) {

	if (mobMenu.style.display === 'flex') {
		mobMenu.style.display = 'none'

		return
	}

	mobMenu.style.display = 'flex'

}