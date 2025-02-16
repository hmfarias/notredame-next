import { db } from '@/firebase';
import { dismissToasts, showLoadingToast } from '@/utils/toasts';
import { addDoc, collection } from 'firebase/firestore';

/**
 * @description This function creates a new product in the server. It adds a new document to the 'products' collection in Firestore.
 * @module actions/createNewProduct.js
 * @param {Object} product - The product object to be created
 * @returns {Object} - The response from the API
 * @exports createNewProductInServer
 */
const createNewProductInServer = async (product) => {
	showLoadingToast('Adding product...');
	try {
		// Reference to the collection in Firestore
		const productsCollection = collection(db, 'products');

		// Add the document to Firestore
		const productRef = await addDoc(productsCollection, { ...product });
		dismissToasts();
		return {
			message: 'Successfully created product',
			error: false,
			payload: { id: productRef.id, ...product },
		};
	} catch (error) {
		console.error('Error creating the product:', error);
		dismissToasts();
		return {
			message: 'Error creating the product',
			error: true,
			payload: null,
		};
	}
};
export default createNewProductInServer;
