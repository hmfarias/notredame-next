/**
 * @description Fetches the product from the API. If the product is found, it returns the product object. If the product is not found, it returns an error message.
 * @module actions/getProductById.js
 * @returns {Object} {payload: Array, message: String, error: Boolean} 	- product from the API with the id provided
 * @exports getProductById
 * @param {String} id - The id of the product
 */
const getProductById = async (id) => {
	try {
		const endpoint = `http://localhost:3000/api/product?id=${id}`;

		const data = await fetch(endpoint);
		const { payload: product } = await data.json();

		if (!product) {
			return {
				payload: null,
				message: 'Product not found',
				error: true,
			};
		}

		return {
			payload: product,
			message: 'Product fetched successfully',
			error: false,
		};
	} catch (error) {
		return {
			payload: null,
			message: 'Error fetching the product',
			error: true,
		};
	}
};

export default getProductById;
