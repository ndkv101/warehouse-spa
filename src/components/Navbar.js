import React from 'react'

const Navbar = ({ setProduct }) => {
	return (
		<nav>
			<button onClick={() => setProduct('jackets')}>Jackets</button>
			<button onClick={() => setProduct('shirts')}>Shirts</button>
			<button onClick={() => setProduct('accessories')}>Accessories</button>
		</nav>
	)
}

export default Navbar
