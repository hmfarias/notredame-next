import getProductByIdFromServer from '@/actions/getProductByIdFromServer';
import getProductsFromServerParams from '@/actions/getProductsFromServerParams';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import PageTitle from '@/components/PageTitle';
import ProductDetailContainer from '@/components/ProductDetailContainer';
import { Suspense } from 'react';

// Generate metadata for each product
export const generateMetadata = async ({ params }) => {
	const { id } = await params;
	const { payload: producto } = await getProductByIdFromServer(id);

	return {
		title: producto.title,
		description: producto.description,
	};
};
// NOTA PARA EL PROFE: El codigo de abajo funciona y genera las páginas estáticas correctamente, pero a la hora de utilizar la version de producccion, (deploy con vercer), no se pueden apreciar correctamente las funcionalidades de alta de producto y la actualización de stock al crear una orden. Ello es debido justamente a que con el codigo de abajo, las paginas quedan estaticas y no se pueden actualizar ni para mostrar nuevos productos ni para ver el stock actualizado en uno de ellos.
// export const generateStaticParams = async () => {
// 	const params = await getProductsFromServerParams();
// 	return params;
// };

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
