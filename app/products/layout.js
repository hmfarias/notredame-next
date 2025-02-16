import getCategoriesList from '@/actions/getCategoriesList';
import getCategoriesListFromServer from '@/actions/getCategoriesListFromServer';
import PageTitle from '@/components/PageTitle';
import ProductLayoutClient from '@/components/ProductLayoutClient';

/**
 * @description Returns the Product Layout (server-side)
 * @module app/products/layout
 * @returns {JSX.Element} JSX.Element - the Product Layout (server-side)
 * @requires getCategoriesList
 * @requires PageTitle
 * @requires ProductLayoutClient
 * @param {Object} props - The props object
 * @param {JSX.Element} props.children - The children components
 * @exports ProductLayout
 */
const ProductLayout = async ({ children }) => {
	// const { payload: categories, error, message } = await getCategoriesList();//localhost:3000/api/categories
	const { payload: categories, error, message } = await getCategoriesListFromServer(); //firebase

	if (error) {
		return (
			<>
				<PageTitle>Error</PageTitle>
				<p>{message}</p>
			</>
		);
	}

	return <ProductLayoutClient categories={categories}>{children}</ProductLayoutClient>;
};

export default ProductLayout;
