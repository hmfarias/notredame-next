'use client';

// Steps to create a context provider
// 1. Create a context using React.createContext (import createContext from React)
import { createContext, useEffect, useState } from 'react';

// 2. Create a context in a variable
export const CartContext = createContext();
const { Provider } = CartContext;

// 4. Create a new component that uses the Provider inside of its return
/**
 * @description The Cart Context Provider is a React context provider that manages the shopping cart state of the application. It provides the cart state, functions to add, remove, and delete items from the cart, and a setter function to update the cart state.
 * @module providers/CartProvider.js
 * @returns {Object} - the Cart Context Provider
 */
export const CartContextProvider = (props) => {
	//The shopping cart counter ("cartState") is application-wide in scope and can therefore be defined in this context
	const [cartState, setCartState] = useState([]);

	// Load localStorage data only in the client
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedCart = localStorage.getItem('cartState');
			setCartState(savedCart ? JSON.parse(savedCart) : []);
		}
	}, []);

	// Save data at localStorage when the state changes
	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cartState', JSON.stringify(cartState));
		}
	}, [cartState]);

	/**
	 * @description Receive the product and the quantity that is being added to the shopping cart
	 * @param {*} product is the object containing all the data of the product to be added
	 * @param {*} qtyItem
	 */
	const addItem = (product, qtyItem) => {
		setCartState((prevCart) => {
			//First validate if the received product already exists in the shopping cart. If it does, increment the quantity
			const existingProduct = prevCart.find((item) => item.id === product.id);
			if (existingProduct) {
				return prevCart.map((item) =>
					item.id === product.id ? { ...item, qtyItem: item.qtyItem + 1 } : item
				);
			} else {
				return [...prevCart, { ...product, qtyItem }];
			}
		});
	};

	/**
	 * @description Remove an item from the shopping cart, receive the product that is being added to the shopping cart (quantity isn't neccesary)
	 * @param {*} product is the object containing all the data of the product to be removed
	 */
	const removeItem = (product) => {
		//First validate if the received product already exists in the shopping cart.
		// If the quantity of the product is equal to one, it will be zero when decremented by one, so it is removed from the array.
		setCartState((prevCart) =>
			prevCart
				.map((item) =>
					item.id === product.id ? { ...item, qtyItem: item.qtyItem - 1 } : item
				)
				.filter((item) => item.qtyItem > 0)
		);
	};

	/**
	 * @description completely removes the product from the shopping cart
	 * @param {*} product is the object containing all the data of the product to be deleted
	 */
	const deleteItem = (product) => {
		setCartState((prevCart) => prevCart.filter((item) => item.id !== product.id));
	};

	return (
		// 5. Configure the "value" prop of the context to be the initial state of the context
		<Provider
			value={{
				// here are passed the elements that will be global for all 'children'
				cartState,
				setCartState,
				addItem,
				removeItem,
				deleteItem,
			}}
		>
			{props.children}
		</Provider>
	);
};

export default CartContextProvider;
