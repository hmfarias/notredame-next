'use client';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * @description Returns a list of products. It is a list of cards with an image and information about the product.
 * @module components/ProductList.js
 * @returns {JSX.Element} - the Product List component
 */
const ProductList = ({ products }) => {
	return (
		<>
			{products.map((product) => {
				return (
					<article
						className="shadow-md rounded-md relative aspect-[1/1.5] bg-secondary text-text overflow-hidden group flex flex-col"
						key={product.id}
					>
						{/* Image at the top card */}
						<div className="relative flex-grow">
							<Image
								src={
									product.thumbnail?.trim() ? product.thumbnail : '/defect-product.png'
								}
								alt={`Thumbnail of ${product.title}`}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="group-hover:scale-125 transition-transform duration-500 ease-in-out  object-cover rounded-t-md"
							/>
						</div>

						{/* Content at the bottom */}
						<div className="bg-accent/40 backdrop-blur-xl w-full px-4 py-2 rounded-b-md">
							<div className="flex justify-between mb-2">
								<h2 className="font-bold text-xl max-w-[270px] truncate">
									{product.title}
								</h2>
								<p>${product.price}</p>
							</div>

							<Link
								href={`/product/${product.id}`}
								className="flex items-center justify-center hover:bg-accent/30 hover:rounded-lg hover:text-lg hover:font-bold transition-all duration-300 p-2"
							>
								View more <MoveUpRight className="ml-2" />
							</Link>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default ProductList;
