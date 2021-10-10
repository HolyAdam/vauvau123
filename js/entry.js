const schemeSvg = document.getElementById('schemeSvg')
const price = 350
const totalPrice = document.querySelector('.price-total')

let activePlaces = 0

schemeSvg.addEventListener('click', svgClickHandler)



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
