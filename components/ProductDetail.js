'use client';
import { Truck } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';
import GetStockMessage from './GetStockMessage';
import RatingStars from './RatingStars';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/providers/CartProvider';
import { showWarningToast } from '@/utils/toasts';

/**
 * @description Returns the Product Detail component
 * @module components/ProductDetail.js
 * @returns {JSX.Element} - the Product Detail
 * @exports ProductDetail
 * @requires getProductById
 * @requires PageTitle
 * @requires DetailList
 */
const ProductDetail = ({ product }) => {
	//Receives from the ‘CartContext’ context, the value of the shopping cart counter and the updating function of that state.
	const { cartState, addItem, removeItem } = useContext(CartContext);

	//Local states are defined
	const [count, setCount] = useState(0);
	// const toast = useToast();

	const handleAddItem = () => {
		const newCount = count + 1;
		//verify that no more products can be added than the available stock.
		if (newCount <= product.stock) {
			setCount(newCount);
			addItem(product, newCount);
		} else {
			// Show warning message
			showWarningToast(
				`Not enough stock to add <strong>${product.title}</strong>. Only ${product.stock} left in stock.`
			);
		}
	};

	const handleRemoveItem = () => {
		if (count > 0) {
			setCount(count - 1);
			removeItem(product);
		} else {
			setCount(0);
			// Show warning message
			showWarningToast(`There are no ${product.title} in the cart.`);
		}
	};

	useEffect(() => {
		//First check if the product already has something in the shopping cart.
		//This is done only the first time the component is renderized - that's why use useeeffffect
		const existingProduct = cartState.find((it) => it.id === product.id);
		if (existingProduct) {
			//If the product is already in the cart, update the product counter
			setCount(existingProduct.qtyItem);
		}
	}, []);

	const formattedPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(product.price);

	return (
		<div className="max-w-7xl mx-auto ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
				{/* Product image */}
				<Image
					className="rounded-md w-full h-full object-cover"
					alt="product image"
					src={product.thumbnail?.trim() ? product.thumbnail : '/defect-product.png'}
					width={500}
					height={500}
				/>
				{/* Product content */}
				<div className="space-y-6 md:space-y-10">
					{/* Header */}
					<div>
						<h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
							{product.title}
						</h1>
						<p className="text-2xl font-light text-gray-900 mb-2">{formattedPrice} USD</p>
						<RatingStars rating={product.rating} />
					</div>

					{/* Descripción */}
					<div className="space-y-4 sm:space-y-6">
						<div className="border-t border-gray-200 pt-4">
							<p className="text-lg">{product.description}</p>
						</div>
					</div>

					{/* Stock */}
					<div className="flex">
						<p>
							<span className="mr-2 font-semibold">Stock:</span>
							<GetStockMessage stock={product.stock} />
						</p>
					</div>

					{/* Add to cart controls */}
					<p className="font-semibold m-0 mb-2">Add to cart</p>
					<div className="flex justify-between items-center gap-4 w-[150px]">
						<Button
							aria-label="Decrease quantity"
							className="text-xl rounded-sm hover:translate-y-1 transition-all w-10 min-w-20 py-2"
							onClick={handleRemoveItem}
						>
							-
						</Button>
						<p className="w-6 text-center">{count}</p>
						<Button
							aria-label="Increase quantity"
							className="text-xl rounded-sm hover:translate-y-1 transition-all w-10 min-w-20 py-2"
							onClick={handleAddItem}
						>
							+
						</Button>
					</div>

					<hr className="border-t border-gray-200" />

					{/* Shipping information */}
					<div className="flex items-center justify-center space-x-2">
						<Truck />
						<p>2-3 business days delivery</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
