/**
 * * product/page.js
 * Returns the Product page
 */

import getProducts from '@/actions/getProducts';
import PageTitle from '@/components/PageTitle';
import ProductList from '@/components/ProductList';

const ProductsPage = async () => {
	const { payload: products, error, message } = await getProducts();

	if (error) {
		return (
			<>
				<PageTitle>Error</PageTitle>
				<p>{message}</p>
			</>
		);
	}

	return (
		<>
			<PageTitle>All Products</PageTitle>
			<ProductList products={products} />
		</>
	);
};
export default ProductsPage;
