import ProductLayoutClient from '@/components/ProductLayoutClient';

const ProductLayout = async ({ children }) => {
	// Fetch categories from the API
	const endpointBase = 'https://dummyjson.com/products';
	const endpoint = `${endpointBase}/categories`;
	const data = await fetch(endpoint);
	const categories = await data.json();

	return <ProductLayoutClient categories={categories}>{children} </ProductLayoutClient>;
};

export default ProductLayout;
