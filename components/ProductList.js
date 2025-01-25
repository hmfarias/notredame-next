/**
 * * ProductList.js
 * Returns a responsive list of products rendered in a grid layout in cards format.
 */

'use client';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductList = ({ products }) => {
	return (
		<>
			{products.map((product) => {
				return (
					<article
						className="shadow-md rounded-md relative aspect-[1/1.15] bg-secondary text-text overflow-hidden group "
						key={product.id}
					>
						<Image
							src={product.thumbnail}
							alt={`Thumbnail of ${product.title}`}
							fill
							className="group-hover:scale-125 transition-all"
						/>

						<div className="z-10 absolute bottom-0 bg-accent/40 backdrop-blur-xl l-0 w-full p-2">
							<div className="flex justify-between">
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
