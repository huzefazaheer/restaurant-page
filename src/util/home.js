import { clear } from './clearpage'

export function createHomePage() {
	clear()

	const content = document.getElementById('content')

	const heading = document.createElement('h1')

	heading.innerText = 'Super Cool Steakhouse'

	const detail = document.createElement('p')

	detail.className = 'info'
	detail.innerText = `Indulge in a culinary journey of unparalleled flavor at our esteemed
steakhouse. Nestled in the heart of Manchester, our restaurant invites
you to savor the finest cuts of USDA Prime beef expertly prepared by our
skilled chefs. As you step into our elegant dining space, a warm
ambiance and impeccable service await, setting the stage for an
unforgettable dining experience. At our steakhouse, we pride ourselves
on sourcing only the highest quality ingredients, ensuring each dish is
a masterpiece of taste and texture. Whether you prefer a tender filet
mignon, a succulent ribeye, or a robust New York strip, our menu boasts
a selection to satisfy every palate. Each steak is hand-selected for its
marbling and flavor profile, then perfectly seasoned and grilled to your
desired level of perfection. But our commitment to excellence extends
beyond steak. Explore our menu to discover an array of appetizers,
sides, and desserts crafted with the same dedication to quality and
flavor. From mouthwatering seafood options to decadent desserts, every
dish is prepared with care and precision. Join us for an unforgettable
dining experience where every bite is a celebration of flavor and every
moment is savored in good company. Welcome to Super Cool Steakhouse,
where extraordinary taste meets unparalleled hospitality.`

	const rights = document.createElement('p')
	const italics = document.createElement('em')

	italics.innerText = 'rights of admissions reserved'

	content.appendChild(heading)
	content.appendChild(detail)
	content.appendChild(rights)
	rights.appendChild(italics)
}
