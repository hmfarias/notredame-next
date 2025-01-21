/**
 * * product/page.js
 * Returns the Product page
 */

import PageTitle from '@/components/PageTitle';
import ProductList from '@/components/ProductList';

export const ProductsPage = async () => {
	const endpointBase = 'https://dummyjson.com/products';
	const limit = 30; // 30 is the default value (cero for all products)
	const endpoint = `${endpointBase}?limit=${limit}`;
	const data = await fetch(endpoint);
	const { products } = await data.json();

	return (
		<>
			<PageTitle>Products</PageTitle>
			<ProductList products={products} />
		</>
	);
};
export default ProductsPage;
