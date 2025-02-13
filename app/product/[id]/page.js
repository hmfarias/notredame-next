/**
 * @module app/product/[id]/page.js
 * @returns {JSX.Element} JSX.Element - the Product Detail page
 * @exports ProductDetailPage
 * @requires Button
 * @requires PageTitle
 * @requires Link
 * @description The Product Detail page
 */

import LoadingSkeleton from '@/components/LoadingSkeleton';
import PageTitle from '@/components/PageTitle';
import ProductDetailContainer from '@/components/ProductDetailContainer';
import { Suspense } from 'react';

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
