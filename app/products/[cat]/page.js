import getProducts from '@/actions/getProducts';
import PageTitle from '@/components/PageTitle';
import ProductList from '@/components/ProductList';

const ProductsByCategoryPage = async ({ params }) => {
	const { cat } = await params;
	const { payload: products, error, message } = await getProducts(cat);

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
			<PageTitle>Products {cat}</PageTitle>
			<ProductList products={products} />
		</>
	);
};

export default ProductsByCategoryPage;
