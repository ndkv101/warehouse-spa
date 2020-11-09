import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchAvailability = async () => {
	const brands = ['reps', 'abiplos', 'derp', 'nouke', 'xoon']

	const res = await Promise.all(
		brands.map(brand =>
			axios.get(`https://bad-api-assignment.reaktor.com/availability/${brand}`)
		)
	)
	const availability = res.map(item => item.data.response).flat(2)
	return availability
}

const Product = ({ products, type }) => {
	const productData = useMemo(
		() => products?.filter(product => product.type === type),
		[products, type]
	)

	const { data } = useQuery('availability', fetchAvailability)

	console.log('data', data)
	if (!productData) {
		return null
	}

	return (
		<table>
			<thead>
				<tr>
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
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Product
