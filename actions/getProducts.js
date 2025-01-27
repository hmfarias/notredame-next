/**
 * @module actions/getProducts.js
 * @returns {Object} {payload: Array, message: String, error: Boolean} - products or products by category from the API depending if recieves a category parameter
 * @exports getProducts
 * @param {String} category - The category name or null when fetching all products
 * @description Fetches the products list from the API. If a category is provided, it fetches the products by category else it fetches all products
 */

const getProducts = async (category) => {
	try {
		const endpointApiNext = 'http://localhost:3000/api/products';

		const endpoint = category
			? `${endpointApiNext}?category=${category}`
			: endpointApiNext;

		const data = await fetch(endpoint);
		const { payload: products } = await data.json();

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
