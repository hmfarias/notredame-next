import PageTitle from './PageTitle';
import ProductDetail from './ProductDetail';
import getProductById from '@/actions/getProductById';

/**
 * @description The Product Detail Container component returns the product detail page. It uses the getProductById action to fetch the product data from the API and renders the Product Detail component.
 * @module components/ProductDetailContainer.js
 * @returns {JSX.Element} - the Product detail Container
 * @exports ProductDetailContainer
 * @requires getProductById
 * @requires PageTitle
 * @requires DetailList
 */
const ProductDetailContainer = async ({ id }) => {
	const { payload: product, error, message } = await getProductById(id);

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
