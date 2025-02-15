import getProducts from '@/actions/getProducts';
import PageTitle from './PageTitle';
import ProductList from './ProductList';

/**
 * @description The Product List Container component returns the product list page. It uses the getProducts action to fetch the products data from the API and renders the Product List component.
 * @module components/ProductListContainer.js
 * @returns {JSX.Element} - the Product List Container
 * @exports ProductListContainer
 * @requires getProducts
 * @requires PageTitle
 * @requires ProductList
 */
const ProductListContainer = async ({ category }) => {
	const { payload: products, error, message } = await getProducts(category);

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
