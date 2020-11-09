import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import axios from 'axios'

const fetchProducts = async (key, type) => {
	const res = await axios.get(
		`https://bad-api-assignment.reaktor.com/products/${type}`
	)
	return res.data
}

const App = () => {
	const [type, setType] = useState('jackets')

	const { isLoading, isError, data, error } = useQuery(
		['products', type],
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
		<React.Fragment>
			<div className='App'>
				<h2>WAREHOUSE SPA</h2>
				<Navbar setType={setType} />
				<Product products={data} />
			</div>
			<ReactQueryDevtools initialIsOpen />
		</React.Fragment>
	)
}

export default App
