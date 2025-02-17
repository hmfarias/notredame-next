import getProductsFromServerParams from '@/actions/getProductsFromServerParams';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import PageTitle from '@/components/PageTitle';
import ProductListContainer from '@/components/ProductListContainer';
import { Suspense } from 'react';

// NOTA PARA EL PROFE: El codigo de abajo funciona y genera las páginas estáticas correctamente, pero a la hora de utilizar la version de producccion, (deploy con vercer), no se pueden apreciar correctamente las funcionalidades de alta de producto y la actualización de stock al crear una orden. Ello es debido justamente a que con el codigo de abajo, las paginas quedan estaticas y no se pueden actualizar ni para mostrar nuevos productos ni para ver el stock actualizado en uno de ellos.
// export const generateStaticParams = async () => {
// 	const params = await getProductsFromServerParams();
// 	return params;
// };

/**
 * @description Returns the Products by Category page
 * @module app/products/[cat]/page.js
 * @returns {JSX.Element} JSX.Element - the Products by Category page
 * @param {Object} params - The route parameters
 * @param {string} params.cat - The category name
 */
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
