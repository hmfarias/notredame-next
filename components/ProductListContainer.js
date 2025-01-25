/**
 * @module components/ProductListContainer.js
 * @returns {JSX.Element} - the Product List Container
 * @exports ProductListContainer
 * @requires getProducts
 * @requires PageTitle
 * @requires ProductList
 * @description The Product List Container
 */

import getProducts from '@/actions/getProducts';
import PageTitle from './PageTitle';
import ProductList from './ProductList';

const ProductListContainer = async ({ category }) => {
	const { payload: products, error, message } = await getProducts(category);

	console.log('products in productlistcontainer');
	console.log(products);

	if (error) {
		return (
			<>
				<PageTitle>Error</PageTitle>
				<p>{message}</p>
			</>
		);
	}

	return <ProductList products={products} />;
};

export default ProductListContainer;
