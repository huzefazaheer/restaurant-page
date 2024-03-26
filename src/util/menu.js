import { clear } from './clearpage'

export function createMenuPage() {
	clear()

	const content = document.getElementById('content')

	const heading = document.createElement('h1')

	heading.innerText = 'Menu'

	const menu1 = document.createElement('p')
	menu1.className = 'info'
	menu1.innerText = `One potato two potato`

	const menu2 = document.createElement('p')
	menu2.className = 'info'
	menu2.innerText = `Two potato one potato`

	content.appendChild(heading)
	content.appendChild(menu1)
	content.appendChild(menu2)
}
