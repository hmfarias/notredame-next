/**
 * @module components/ProductDetailContainer.js
 * @returns {JSX.Element} - the Product detail Container
 * @exports ProductDetailContainer
 * @requires getProductById
 * @requires PageTitle
 * @requires DetailList
 * @description The Product Detail Container
 */

import PageTitle from './PageTitle';
import ProductDetail from './ProductDetail';
import getProductById from '@/actions/getProductById';

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
