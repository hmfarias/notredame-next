'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '@/providers/CartProvider';
import { useRouter } from 'next/navigation';

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

	// Navigate directly to the '/payment' page by clicking on the 'Buy' button
	const handleNavigatePayment = () => {
		router.push('/cart/payment'); // Redirect to the '/cart/payment' route
	};

	return (
		<div className="flex flex-col max-w-3xl p-6 space-y-4 md:p-10 bg-background text-text">
			<h2 className="text-xl font-semibold">Your cart</h2>
			<ul className="flex flex-col divide-y divide-gray-300">
				{cartState.length === 0 ? (
					<li className="flex flex-col py-6 items-center justify-center">
						<span className="mr-2">ℹ️</span>
						<p>Your cart is empty.</p>
					</li>
				) : (
					cartState.map((item) => (
						<li
							key={item.id}
							className="flex flex-col py-6 md:flex-row md:justify-between"
						>
							<div className="flex w-full space-x-2 md:space-x-4">
								<Image
									src={item.thumbnail}
									alt={item.title}
									width={80}
									height={80}
									className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none md:w-32 md:h-32"
								/>
								<div className="flex flex-col justify-between w-full pb-4">
									<div className="flex justify-between w-full pb-2 space-x-2">
										<div className="space-y-1">
											<h3 className="text-lg font-semibold leading-snug md:pr-8">
												{item.title}
											</h3>
											<p className="text-sm text-gray-600">{item.description}</p>
										</div>
										<div className="text-right">
											<p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
											<p className="text-sm line-through text-gray-400">
												${(item.price * 1.2).toFixed(2)} {/* Example of original price */}
											</p>
										</div>
									</div>
									<div className="flex text-sm divide-x divide-gray-300">
										<button
											type="button"
											className="flex items-center px-2 py-1 pl-0 space-x-1"
											onClick={() => handleDeleteItem(item)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												className="w-4 h-4 fill-current"
											>
												<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
												<rect width="32" height="200" x="168" y="216"></rect>
												<rect width="32" height="200" x="240" y="216"></rect>
												<rect width="32" height="200" x="312" y="216"></rect>
												<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
											</svg>
											<span>Remove</span>
										</button>
										<div className="flex items-center px-2 py-1 space-x-1">
											<button
												className="p-1 bg-accent text-text rounded-md disabled:opacity-50"
												onClick={() => removeItem(item)}
												disabled={item.qtyItem === 1}
											>
												-
											</button>
											<span>{item.qtyItem}</span>
											<button
												className="p-1 bg-accent text-text rounded-md disabled:opacity-50"
												onClick={() => addItem(item)}
												disabled={item.qtyItem >= item.stock}
											>
												+
											</button>
										</div>
									</div>
								</div>
							</div>
						</li>
					))
				)}
			</ul>
			<div className="space-y-1 text-right">
				<p>
					Total amount:
					<span className="font-semibold">${total.toFixed(2)}</span>
				</p>
				<p className="text-sm text-gray-600">Not including taxes and shipping costs</p>
			</div>
			<div className="flex justify-end space-x-4">
				<button
					type="button"
					className="px-6 py-2 border rounded-md border-primary text-primary"
					onClick={() => router.back()}
				>
					Back <span className="sr-only sm:not-sr-only">to shop</span>
				</button>
				<button
					type="button"
					className="px-6 py-2 border rounded-md bg-primary text-text hover:bg-opacity-80 transition-colors"
					onClick={handleNavigatePayment}
				>
					<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
				</button>
			</div>
		</div>
	);
};
export default CartPage;
