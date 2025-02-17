'use client';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './ProductCard';

/**
 * @description Returns a list of products. It is a list of cards with an image and information about the product.
 * @module components/ProductList.js
 * @returns {JSX.Element} - the Product List component
 */
const ProductList = ({ products }) => {
	return (
		<>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</>
	);
};

export default ProductList;
