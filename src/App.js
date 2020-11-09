import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import axios from 'axios'

const fetchProducts = async () => {
	const productTypes = ['jackets', 'shirts', 'accessories']

	const res = await Promise.all(
		productTypes.map(type =>
			axios.get(`https://bad-api-assignment.reaktor.com/products/${type}`)
		)
	)
	const products = res.map(item => item.data).flat(2)
	return products
}

const App = () => {
	const [type, setType] = useState('jackets')

	const { isLoading, isError, data, error } = useQuery(
		'products',
		fetchProducts
	)

	{
		isLoading && <div>Loading...</div>
	}
	{
		isError && <div>Error: {error.message}</div>
	}
	return (
		<React.Fragment>
			<div className='App'>
				<h2>WAREHOUSE SPA</h2>
				<Navbar setType={setType} />
				<Product products={data} type={type} />
			</div>
			<ReactQueryDevtools initialIsOpen />
		</React.Fragment>
	)
}

export default App
