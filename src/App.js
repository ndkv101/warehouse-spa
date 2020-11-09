import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'

const App = () => {
	const [product, setProduct] = useState('jackets')
	return (
		<div className='App'>
			<h2>WAREHOUSE SPA</h2>
			<Navbar setProduct={setProduct} />
			<Product product={product} />
		</div>
	)
}

export default App
