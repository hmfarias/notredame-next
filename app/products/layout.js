import getCategoriesList from '@/actions/getCategoriesList';
import PageTitle from '@/components/PageTitle';
import ProductLayoutClient from '@/components/ProductLayoutClient';

const ProductLayout = async ({ children }) => {
	const { payload: categories, error, message } = await getCategoriesList();

	if (error) {
		return (
			<>
				<PageTitle>Error</PageTitle>
				<p>{message}</p>
			</>
		);
	}

	return (
		<>
			return <ProductLayoutClient categories={categories}>{children}</ProductLayoutClient>
			;
		</>
	);
};

export default ProductLayout;
