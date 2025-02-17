import getProductByIdFromServer from '@/actions/getProductByIdFromServer';
import PageTitle from './PageTitle';
import ProductDetail from './ProductDetail';
import getProductById from '@/actions/getProductById';

/**
 * @description The Product Detail Container component returns the product detail page. It uses the getProductById action to fetch the product data from the API and renders the Product Detail component.
 * @module components/ProductDetailContainer.js
 * @returns {JSX.Element} - the Product detail Container
 */
const ProductDetailContainer = async ({ id }) => {
	// const { payload: product, error, message } = await getProductById(id); //localhost:3000/api/product?id
	const { payload: product, error, message } = await getProductByIdFromServer(id); //firebase

	if (error) {
		return (
			<>
				<PageTitle>Error</PageTitle>
				<p>{message}</p>
			</>
		);
	}

	return <ProductDetail product={product} />;
};

export default ProductDetailContainer;
