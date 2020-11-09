import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchProducts = async () => {
	const res = await axios.get(
		`https://bad-api-assignment.reaktor.com/products/jackets`
	)
	return res.data
}

const App = () => {
	const [product, setProduct] = useState('jackets')

	const { isLoading, isError, data, error } = useQuery(
		'products',
		fetchProducts
	)

	console.log('data', data)

	{
		isLoading && <div>Loading...</div>
	}
	{
		isError && <div>Error: {error.message}</div>
	}
	return (
		<div className='App'>
			<h2>WAREHOUSE SPA</h2>
			<Navbar setProduct={setProduct} />
			<Product product={product} />
		</div>
	)
}

export default App
