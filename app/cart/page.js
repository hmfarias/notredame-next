'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '@/providers/CartProvider';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { Trash2 } from 'lucide-react';

/**
 * @description Returns the Cart page
 * @module app/cart/page.js
 * @returns {JSX.Element} JSX.Element - the Cart page
 * @exports CartPage
 */
export const CartPage = () => {
	// Bring elements of the context (the cart and the functions to change its status)
	const { cartState, addItem, removeItem, deleteItem } = useContext(CartContext);

	// Calculate the total price of products in the cart
	const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

	// Function to eliminate an element
	const handleDeleteItem = (item) => {
		deleteItem(item);
	};

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
						<div
							key={item.id}
							className="flex flex-col sm:flex-row p-4 border-accent rounded-md items-center shadow-sm bg-background text-text"
						>
							{/* Image */}
							<Image
								src={item.thumbnail?.trim() ? item.thumbnail : '/defect-product.png'}
								alt={item.title}
								width={100}
								height={100}
								className="object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
							/>
							<div className="flex-1 w-full sm:w-auto">
								<p className="text-lg sm:text-xl font-bold">{item.title}</p>
								<div className="flex items-center mt-2 space-x-4">
									<p>Precio: ${item.price.toFixed(2)}</p>
									<div className="flex items-center space-x-2">
										<Button
											className="p-1 disabled:opacity-50 min-w-10 text-2xl bg-primary  "
											onClick={() => removeItem(item)}
											disabled={item.qtyItem === 1}
										>
											-
										</Button>
										<span>{item.qtyItem}</span>
										<Button
											className="p-1 disabled:opacity-50 min-w-10 text-2xl bg-primary "
											onClick={() => addItem(item)}
											disabled={item.qtyItem >= item.stock}
										>
											+
										</Button>
									</div>
								</div>
							</div>
							<div className="ml-auto mt-4 sm:mt-0">
								<div className="flex items-center space-x-2">
									<p className="font-bold">
										Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
									</p>
									<div className="relative group">
										<Button
											className="p-1 bg-red-500"
											onClick={() => handleDeleteItem(item)}
										>
											<Trash2 className="text-background" />
										</Button>
										<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-0 min-w-[90px] text-center whitespace-nowrap">
											Delete product
										</span>
									</div>
								</div>
							</div>
						</div>
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
