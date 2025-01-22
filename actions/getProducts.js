/**
 * * actions/getProducts.js
 * Fetch and return products or products by category from the API depending if recieves a category parameter
 */

const getProducts = async (category) => {
	try {
		const endpointBase = 'https://dummyjson.com/products';

		const endpoint = category ? `${endpointBase}/category/${category}` : endpointBase;

		const data = await fetch(endpoint);
		const { products } = await data.json();

		return {
			payload: products,
			message: 'Products fetched successfully',
			error: false,
		};
	} catch (error) {
		return {
			payload: null,
			message: 'Error fetching products',
			error: true,
		};
	}
};

export default getProducts;
