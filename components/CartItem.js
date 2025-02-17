import { Trash2 } from 'lucide-react';
import Button from './Button';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '@/providers/CartProvider';
/**
 * @description Returns a cart item. It is a card with an image and information about the product.
 * @module components/Cart.js
 * @returns {JSX.Element} - the Cart component
 */
const CartItem = ({ item }) => {
	// Bring elements of the context (the cart and the functions to change its status)
	const { addItem, removeItem, deleteItem } = useContext(CartContext);

	// Function to eliminate an element
	const handleDeleteItem = (item) => {
		deleteItem(item);
	};

	return (
		<>
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
							<Button className="p-1 bg-red-500" onClick={() => handleDeleteItem(item)}>
								<Trash2 className="text-background" />
							</Button>
							<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-0 min-w-[90px] text-center whitespace-nowrap">
								Delete product
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CartItem;
