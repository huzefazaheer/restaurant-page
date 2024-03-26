import { createHomePage } from './util/home'
import { createLocationPage } from './util/location'
import { createMenuPage } from './util/menu'

const btn_home = document.querySelector('#home')
const btn_menu = document.querySelector('#menu')
const btn_location = document.querySelector('#location')

btn_home.addEventListener('click', (e) => {
	btn_home.classList.add('active')
	btn_menu.classList.remove('active')
	btn_location.classList.remove('active')
	createHomePage()
})
btn_menu.addEventListener('click', (e) => {
	btn_menu.classList.add('active')
	btn_home.classList.remove('active')
	btn_location.classList.remove('active')
	createMenuPage()
})
btn_location.addEventListener('click', (e) => {
	btn_location.classList.add('active')
	btn_home.classList.remove('active')
	btn_menu.classList.remove('active')
	createLocationPage()
})

createHomePage()
