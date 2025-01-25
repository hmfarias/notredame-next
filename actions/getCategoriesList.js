/**
 * @module actions/getCategoriesList
 * @returns {Object} {payload: Array, message: String, error: Boolean} - The categories list
 * @exports getCategoriesList
 * @description Fetches the categories list from the API
 */

const getCategoriesList = async () => {
	try {
		const endpointBase = 'https://dummyjson.com/products';

		const endpoint = `${endpointBase}/categories`;

		const data = await fetch(endpoint);
		const categories = await data.json();

		return {
			payload: categories,
			message: 'Categories list fetched successfully',
			error: false,
		};
	} catch (error) {
		return {
			payload: null,
			message: 'Error fetching Categories list',
			error: true,
		};
	}
};

export default getCategoriesList;
