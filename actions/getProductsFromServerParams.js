import { db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

/**
 * @description Fetches the products list from the API. If a category is provided, it fetches the products by category else it fetches all products
 * @module actions/getProductsFromServer.js
 * @returns {Object} {payload: Array, message: String, error: Boolean} - products or products by category from the API depending if recieves a category parameter
 * @exports getProducts
 * @param {String} category - The category name or null when fetching all products
 */
const getProductsFromServerParams = async (category) => {
	try {
		//reference to the collection in firebase
		const productsCollection = collection(db, 'products');

		// prepare the filter in case a category is received
		const filter = category
			? query(productsCollection, where('category', '==', category))
			: productsCollection;

		//bring the products of the collection by applying the filter (if no ‘category’ is received the filter will bring all products).
		const snapshot = await getDocs(filter);
		return snapshot.docs.map((documenRef) => {
			const idFirebase = documenRef.id; //the firebase id
			const productData = {};
			// replace the original id from dumyJson for the firebase id
			productData.id = idFirebase;

			return productData;
		});
	} catch (error) {
		console.error('Error fetching products:', error);
		return null;
	}
};

export default getProductsFromServerParams;
