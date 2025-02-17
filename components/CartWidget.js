import { CartContext } from '@/providers/CartProvider';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

/**
 * @description The Cart Widget component returns a link to the cart page with the total number of items in the shopping cart
 * @module components/CartWidget.js
 * @returns {JSX.Element} - the Cart Widget component
 */
const CartWidget = () => {
	//Receives from the ‘CartContext’ context, the cartState.
	const { cartState } = useContext(CartContext);

	//use reduce() to add up all product quantities and get the total of items in the shopping cart
	const totalItemsCart = cartState.reduce((sum, item) => sum + item.qtyItem, 0);

	return (
		<Link
			href="/cart"
			className="absolute top-1/2 right-5 -translate-y-1/2 md:static md:top-auto md:right-auto md:translate-y-0 stext-text hover:text-secondary flex items-center space-x-6 text-l mr-7 md:mr-4 md:text-xl"
		>
			<ShoppingCartIcon className="mr-1 w-5 h-5" />
			<span className="text-lg">{totalItemsCart}</span>
		</Link>
	);
};
export default CartWidget;
