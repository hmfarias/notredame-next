/**
 * @module actions/getProducts.js
 * @returns {Object} {payload: Array, message: String, error: Boolean} - products or products by category from the API depending if recieves a category parameter
 * @exports getProducts
 * @param {String} category - The category name or null when fetching all products
 * @description Fetches the products list from the API. If a category is provided, it fetches the products by category else it fetches all products
 */

const getProducts = async (category) => {
	console.log(category);

	try {
		const endpointBase = 'https://dummyjson.com/products';
		const enpointApiNext = 'http://localhost:3000/api/products';
		console.log(`${endpointBase}/category/${category}`);

		const endpoint = category ? `${endpointBase}/category/${category}` : enpointApiNext;

		//the next three lines will be deleted when I have the API ready with the same response (error,message,payload)
		const response = await fetch(endpoint);
		const data = await response.json();
		const products = category ? data.products : data.payload;

		// This is the original code I will use this when I have the API ready with the same response (error,message,payload)
		// const data = await fetch(endpoint);
		// const { payload:products } = await data.json();

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
