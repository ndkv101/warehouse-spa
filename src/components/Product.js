import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchAvailability = async () => {
	const brands = ['reps', 'abiplos', 'derp', 'nouke', 'xoon']

	const getAvailability = async name => {
		try {
			let result = []
			do {
				const response = await axios.get(
					`https://bad-api-assignment.reaktor.com/availability/${name}`
				)
				result = result.concat(response.data.response)
			} while (result.length <= 1)

			return result
		} catch (err) {
			console.error(err.message)
		}
	}

	const res = await Promise.all(brands.map(brand => getAvailability(brand)))
	const availability = res.flat(2)

	return availability
}

const Product = ({ products, type }) => {
	const productData = useMemo(
		() => products?.filter(product => product.type === type),
		[products, type]
	)

	const { isLoading, isError, error, data: availability } = useQuery(
		'availability',
		fetchAvailability
	)

	if (!productData) {
		return null
	}

	const checkAvailability = id => {
		const productID = id.toUpperCase()
		const data = availability?.find(item => item.id === productID)

		const regex = /\>(.*?)\</
		const state = data?.DATAPAYLOAD.match(regex)[1]

		return state
	}

	const displayInfo = id => {
		isLoading && <span>Loading...</span>
		isError && <span>Error: error.message</span>

		return checkAvailability(id)
	}

	return (
		<table>
			<thead>
				<tr className='table-headline'>
					<th>Type</th>
					<th>Name</th>
					<th>Color</th>
					<th>Price</th>
					<th>Manufacturer</th>
					<th>Availability</th>
				</tr>
			</thead>
			<tbody>
				{productData.map(product => (
					<tr key={product.id}>
						<td>{product.type}</td>
						<td>{product.name}</td>
						<td>{product.color.map(color => color + '\t')}</td>
						<td>{product.price}</td>
						<td>{product.manufacturer}</td>
						<td>{displayInfo(product.id)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Product
