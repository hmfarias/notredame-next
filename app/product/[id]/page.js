import getProductsFromServerParams from '@/actions/getProductsFromServerParams';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import PageTitle from '@/components/PageTitle';
import ProductDetailContainer from '@/components/ProductDetailContainer';
import { Suspense } from 'react';

// Generate metadata for each product
export const generateMetadata = async ({ params }) => {
	const { id } = awaitparams;
	const { payload: product } = await getProductByIdFromServer(id);

	if (error) {
		return {
			title: 'Error',
			description: message,
		};
	}

	return {
		title: product.title,
		description: product.description,
	};
};

export const generateStaticParams = async () => {
	const params = await getProductsFromServerParams();
	return params;
};

/**
 * @description Retuns the Product Detail page
 * @module app/product/[id]/page.js
 * @returns {JSX.Element} JSX.Element - the Product Detail page
 * @exports ProductDetailPage
 * @requires Button
 * @requires PageTitle
 * @requires Link
 */
export const ProductDetailPage = async ({ params }) => {
	const { id } = await params;

	return (
		<>
			<PageTitle>Product Detail</PageTitle>
			<Suspense fallback={<LoadingSkeleton className="aspect-[1/1.15]" repeat={3} />}>
				<ProductDetailContainer id={id} />
			</Suspense>
		</>
	);
};
export default ProductDetailPage;
