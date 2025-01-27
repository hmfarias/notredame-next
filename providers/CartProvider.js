'use client';
// Steps to create a context provider
// 1. Create a context using React.createContext (import createContext from React)
import { createContext, useEffect, useState } from 'react';

// 2. Create a context in a variable
export const CartContext = createContext();

// 3. Get the provider from the context
const { Provider } = CartContext;

// 4. Create a new component that uses the Provider inside of its return
export const CartContextProvider = (props) => {
	//The shopping cart counter ("cartState") is application-wide in scope and can therefore be defined in this context
	const [cartState, setCartState] = useState(() => {
		// Load cartState from local storage if it exists
		const savedCart = localStorage.getItem('cartState');
		return savedCart ? JSON.parse(savedCart) : [];
	}); //cartState and its updater function are now GLOBAL

	// Save cartState to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem('cartState', JSON.stringify(cartState));
	}, [cartState]);

	//Definition of actions that can be performed on the shopping cart
	/**
	 * @description Receive the product and the quantity that is being added to the shopping cart
	 * @param {*} product is the object containing all the data of the product to be added
	 * @param {*} qtyItem
	 */
	const addItem = (product, qtyItem) => {
		//First validate if the received product already exists in the shopping cart.
		const existingProduct = cartState.find((item) => item.id === product.id);

		//If the product already exists, the product is not added but only increased in quantity.
		if (existingProduct) {
			setCartState(
				cartState.map((item) =>
					item.id === product.id ? { ...item, qtyItem: item.qtyItem + 1 } : item
				)
			);
		} else {
			//If the product doesn't exist in the shopping cart, it will only be added
			setCartState([...cartState, { ...product, qtyItem: qtyItem }]);
		}
	};

	/**
	 * @description Remove an item from the shopping cart, receive the product that is being added to the shopping cart (quantity isn't neccesary)
	 * @param {*} product is the object containing all the data of the product to be removed
	 */
	const removeItem = (product) => {
		//First validate if the received product already exists in the shopping cart.
		const existingProduct = cartState.find((item) => item.id === product.id);

		//If the product already exists, its quantity is decreased by one.
		if (existingProduct) {
			// If the quantity of the product is equal to one, it will be zero when decremented by one, so it is removed from the array.
			if (existingProduct.qtyItem === 1) {
				setCartState(cartState.filter((item) => item.id != product.id));
			} else {
				// If the quantity of the product is greater than one, the quantity is only decreased by one.
				setCartState(
					cartState.map((item) =>
						item.id === product.id ? { ...item, qtyItem: item.qtyItem - 1 } : item
					)
				);
			}
		}
	};

	/**
	 * @description completely removes the product from the shopping cart
	 * @param {*} product is the object containing all the data of the product to be deleted
	 */
	const deleteItem = (product) => {
		setCartState(cartState.filter((item) => item.id != product.id));
	};

	return (
		// 5. Configure the "value" prop of the context to be the initial state of the context
		<Provider
			value={{
				// here are passed the elements that will be global for all 'children' (see App.jsx)
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
