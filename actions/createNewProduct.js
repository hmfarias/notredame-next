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
