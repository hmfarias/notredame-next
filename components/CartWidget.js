/**
 * @module components/CartWidget.js
 * @returns {JSX.Element} - the Cart Widget component
 * @exports CartWidget
 * @requires CartContext
 * @requires ShoppingCartIcon
 * @requires Link
 * @requires useContext
 * @description The Cart Widget component returns a link to the cart page with the total number of items in the shopping cart
 *
 */

import { CartContext } from '@/providers/CartProvider';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

const CartWidget = () => {
	//Receives from the ‘CartContext’ context, the cartState.
	const { cartState } = useContext(CartContext);

	//use reduce() to add up all product quantities and get the total of items in the shopping cart
	const totalItemsCart = cartState.reduce((sum, item) => sum + item.qtyItem, 0);

	return (
		<Link href="/cart" className="hover:text-gray-400 flex items-center space-x-6 text-l">
			<ShoppingCartIcon className="mr-1 w-5 h-5" />
			<span className="text-l">{totalItemsCart}</span>
		</Link>
	);
};
export default CartWidget;
