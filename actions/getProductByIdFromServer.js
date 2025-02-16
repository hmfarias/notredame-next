import { db } from '@/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

/**
 * @description Fetches the product from firebase. If the product is found, it returns the product object. If the product is not found, it returns an error message. This function is used in the server-side.
 * @module actions/getProductByIdFromServer.js
 * @returns {Object} {payload: Array, message: String, error: Boolean} - product from the API with the id provided
 * @exports getProductById
 * @param {String} id - The id of the product
 */
const getProductByIdFromServer = async (id) => {
	try {
		if (!id) {
			return {
				message: 'ID is required',
				error: true,
				payload: null,
			};
		}

		// Reference to the 'Products' collection in Firestore
		const productsCollection = collection(db, 'products');

		// Get the document reference
		const docRef = doc(productsCollection, id);
		const query = await getDoc(docRef);
		const product = query.data();
		product.id = id;

		//Verify if there are documents in the result
		if (query.empty) {
			return {
				message: 'Product not found',
				error: true,
				payload: null,
			};
		}

		return {
			message: 'Product fetched',
			error: false,
			payload: product,
		};
	} catch (error) {
		console.error('Error fetching the product:', error);
		return {
			message: 'Error fetching the product',
			error: true,
			payload: null,
		};
	}
};
export default getProductByIdFromServer;
