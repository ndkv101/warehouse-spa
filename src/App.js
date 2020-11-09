import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
	const [product, setProduct] = useState('jackets')
	return (
		<div className='App'>
			<h2>WAREHOUSE SPA</h2>
			<Navbar setProduct={setProduct} />
		</div>
	)
}

export default App
