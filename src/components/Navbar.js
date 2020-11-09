import React from 'react'

const Navbar = ({ setType }) => {
	return (
		<nav>
			<button onClick={() => setType('jackets')}>JACKET</button>
			<button onClick={() => setType('shirts')}>SHIRT</button>
			<button onClick={() => setType('accessories')}>ACCESSORY</button>
		</nav>
	)
}

export default Navbar
