'use client';
import { useContext } from 'react';
import { CartContext } from '@/providers/CartProvider';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import CartItem from '@/components/CartItem';

/**
 * @description Returns the Cart page
 * @module app/cart/page.js
 * @returns {JSX.Element} JSX.Element - the Cart page
 * @exports CartPage
 */
export const CartPage = () => {
	// Bring elements of the context (the cart and the functions to change its status)
	const { cartState } = useContext(CartContext);

	// Calculate the total price of products in the cart
	const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

	// Use useRouter for navigation
	const router = useRouter();

	// Navigate directly to the '/cart/payment' page by clicking on the 'Buy' button
	const handleNavigatePayment = () => {
		router.push('/cart/payment'); // Redirect to the '/cart/payment' route
	};

	return (
		<div className="p-4 sm:p-6 max-w-[800px] mx-auto h-[calc(100vh-10rem)] bg-accent/10 rounded-2xl text-text overflow-y-auto">
			<h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-accent">
				Cart Details
			</h2>
			{cartState.length === 0 ? (
				<div className="bg-secondary text-text rounded-md flex items-center p-4">
					<span className="mr-2">ℹ️</span>
					Your cart is empty.
				</div>
			) : (
				<div className="space-y-2">
					{cartState.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
					<hr className="border-accent/30" />
					<div className="flex flex-col sm:flex-row items-center justify-between mt-5">
						<p className="text-xl sm:text-2xl font-bold">Total: ${total.toFixed(2)}</p>
						<div className="flex justify-end space-x-4">
							<Button
								className="px-6 py-2 border rounded-md bg-primary "
								onClick={() => router.back()}
							>
								Back
							</Button>

							<Button
								className="w-full py-2 px-4 bg-primary "
								onClick={handleNavigatePayment}
							>
								Continue to Checkout
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default CartPage;
