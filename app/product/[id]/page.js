/**
 * @module app/product/[id]/page.js
 * @returns {JSX.Element} JSX.Element - the Product Detail page
 * @exports ProductDetailPage
 * @requires Button
 * @requires PageTitle
 * @requires Link
 * @description The Product Detail page
 */

import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import Link from 'next/link';

export const ProductDetailPage = async ({ params }) => {
	const { id } = await params;

	// Here I fetch the product data from the api using the id
	const endpointBase = 'https://dummyjson.com/products';
	const limit = 30; // 30 is the default value (cero for all products)
	const endpoint = `${endpointBase}/${id}?limit=${limit}`;
	const data = await fetch(endpoint);
	const product = await data.json();

	//if the product is not found, we return a message and home link
	if (product.message) {
		return (
			<>
				<PageTitle>Product not found</PageTitle>
				<div className="mt-8 space-x-4 text-center">
					<p>Product with id: {id} does not exist - Try again</p>
					<Link href="/products">
						<Button>Back to Products</Button>
					</Link>
				</div>
			</>
		);
	}

	return (
		<>
			<PageTitle>Product Detail</PageTitle>
		</>
	);
};
export default ProductDetailPage;
