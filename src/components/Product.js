import React, { useMemo } from 'react'

const Product = ({ products, type }) => {
	const productData = useMemo(
		() => products?.filter(product => product.type === type),
		[products, type]
	)

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
