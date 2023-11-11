/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
	const itemsDetails = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const total = (itemsDetails) => {
		return itemsDetails.reduce(
			(accumulator, item) => accumulator + item.price,
			0
		);
	};

	const handleRemove = (itemId) => {
		dispatch(remove(itemId));
	};

	return (
		<>
			<h3 className='total'>Total : ${total(itemsDetails)} </h3>
			<div className='productsWrapper'>
				{itemsDetails.map((item) => (
					<div className='card' key={item.id}>
						<img src={item.image} alt='' />
						<h4>{item.title}</h4>
						<h5>Price: ${item.price}</h5>
						<button
							className='btn'
							onClick={() => {
								handleRemove(item.id);
							}}>
							Remove from cart
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default Cart;
