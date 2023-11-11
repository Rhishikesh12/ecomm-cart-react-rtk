/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
	const itemsDetails = useSelector((state) => state.cart);
	return (
		<div className='productsWrapper'>
			{itemsDetails.map((items) => (
				<div className='card' key={items.id}>
					<img src={items.image} alt='' />
					<h4>{items.title}</h4>
					<h5>Price: ${items.price}</h5>
				</div>
			))}
		</div>
	);
};

export default Cart;
