import { showSuccessToast } from '@/utils/toasts';

/**
 * @description This function creates a new product in the API. It sends a POST request to the '/api/products' endpoint with the product object as the request body. If the request is successful, the function returns the response from the API.If there is an error, it returns an error message.
 * @module actions/createNewProduct.js
 * @param {Object} product - The product object to be created
 * @returns {Object} - The response from the API
 * @exports createNewProduct
 */
const createNewProduct = async (product) => {
	const endpoint = 'http://localhost:3000/api/products';

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Indicate that the request body to send is a JSON object
			},
			body: JSON.stringify(product),
		});

		const { payload, message, error } = await response.json();
		showSuccessToast(message, 900);

		return {
			payload,
			message,
			error,
		};
	} catch (error) {
		return {
			payload: null,
			message: 'Error creating the product',
			error: true,
		};
	}
};
export default createNewProduct;
