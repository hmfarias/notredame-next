import getProducts from '@/actions/getProducts';
import PageTitle from './PageTitle';
import ProductList from './ProductList';
import getProductsFromServer from '@/actions/getProductsFromServer';

/**
 * @description The Product List Container component returns the product list page. It uses the getProducts action to fetch the products data from the API and renders the Product List component.
 * @module components/ProductListContainer.js
 * @returns {JSX.Element} - the Product List Container
 */
const ProductListContainer = async ({ category }) => {
	// const { payload: products, error, message } = await getProducts(category); //localhost:3000/api/products?category
	const { payload: products, error, message } = await getProductsFromServer(category); //firebase

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
