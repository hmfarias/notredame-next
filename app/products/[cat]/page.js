/**
 * @module app/products/[cat]/page.js
 * @returns {JSX.Element} JSX.Element - the Products by Category page
 * @param {Object} params - The route parameters
 * @param {string} params.cat - The category name
 * @description The Products by Category page
 */

import LoadingSkeleton from '@/components/LoadingSkeleton';
import Loading from '@/components/LoadingSkeleton';
import PageTitle from '@/components/PageTitle';
import ProductListContainer from '@/components/ProductListContainer';
import { Suspense } from 'react';

const ProductsByCategoryPage = async ({ params }) => {
	const { cat } = await params;

	return (
		<>
			<PageTitle>Products {cat}</PageTitle>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2 md:m-4">
				<Suspense fallback={<LoadingSkeleton className="aspect-[1/1.15]" repeat={3} />}>
					<ProductListContainer category={cat} />
				</Suspense>
			</section>
		</>
	);
};

export default ProductsByCategoryPage;
