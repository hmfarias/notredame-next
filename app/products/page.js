import LoadingSkeleton from '@/components/LoadingSkeleton';
import PageTitle from '@/components/PageTitle';
import ProductListContainer from '@/components/ProductListContainer';
import { Suspense } from 'react';

/**
 * @description Returns the Products page
 * @module app/products/page.js
 * @returns {JSX.Element} JSX.Element - the Products page
 * @exports ProductsPage
 * @requires PageTitle
 * @requires ProductListContainer
 * @requires Suspense
 */
const ProductsPage = async () => {
	return (
		<>
			<PageTitle>All Products</PageTitle>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2 md:m-4">
				<Suspense fallback={<LoadingSkeleton className="aspect-[1/1.15]" repeat={6} />}>
					<ProductListContainer />
				</Suspense>
			</section>
		</>
	);
};
export default ProductsPage;
