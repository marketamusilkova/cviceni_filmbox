
// const hamburger = document.getElementById("menu-tlacitko").addEventListener("click", () => {
//   document.getElementById("menu-polozky").classList.toggle("show")
// })

// BONUS (výměna ikony hamburgeru a křížku)
const menuTlacitkoElm = document.querySelector('#menu-tlacitko')
const menuPolozkyElm = document.querySelector('#menu-polozky')
menuTlacitkoElm.addEventListener('click', () => {
	menuPolozkyElm.classList.toggle('show')

	if (menuPolozkyElm.classList.contains('show')) {
		menuTlacitkoElm.innerHTML = '<i class="fas fa-xmark"></i>'
	} else {
		menuTlacitkoElm.innerHTML = '<i class="fas fa-bars"></i>'
	}
})
