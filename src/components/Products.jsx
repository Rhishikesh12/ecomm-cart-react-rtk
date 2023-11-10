/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Products = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			const productData = await res.json();
			setData(productData);
		};
		fetchProducts();
	}, []);

	return (
		<div className='productsWrapper'>
			{data.map((items) => (
				<div className='card' key={items.id}>
					<img src={items.image} alt='' />
					<h4>{items.title}</h4>
					<h5>Price: ${items.price}</h5>
					<button className='btn'>Add to cart</button>
				</div>
			))}
		</div>
	);
};

export default Products;
