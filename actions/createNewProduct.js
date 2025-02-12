const createNewProduct = (product) => {
	console.log('✅ ~ createNewProduct ~ product:', product);

	try {
	} catch (error) {
		return {
			payload: null,
			message: 'Error creating the product',
			error: true,
		};
	}
};
export default createNewProduct;
