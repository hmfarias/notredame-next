import { db } from '@/firebase';
import { dismissToasts, showLoadingToast } from '@/utils/toasts';
import { addDoc, collection } from 'firebase/firestore';

/**
 * @description This function creates a new order in the SERVER.
 * @module actions/createOrder.js
 * @param {Object} order - The order object to be created
 * @returns {Object} - The response from the API
 * @exports createOrder
 */
const createOrder = async (order) => {
	showLoadingToast('Creating order...');
	try {
		// Reference to the collection in Firestore
		const ordersCollection = collection(db, 'orders');

		// Add the document to Firestore
		const orderRef = await addDoc(ordersCollection, { ...order });
		dismissToasts();
		return {
			message: 'Successfully created order',
			error: false,
			payload: { id: orderRef.id, ...order },
		};
	} catch (error) {
		console.error('Error creating the order:', error);
		dismissToasts();
		return {
			message: 'Error creating the order',
			error: true,
			payload: null,
		};
	}
};
export default createOrder;
