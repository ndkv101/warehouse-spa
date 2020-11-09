import React from 'react'

const Navbar = ({ setType }) => {
	return (
		<nav>
			<button onClick={() => setType('jackets')}>Jackets</button>
			<button onClick={() => setType('shirts')}>Shirts</button>
			<button onClick={() => setType('accessories')}>Accessories</button>
		</nav>
	)
}

export default Navbar
