import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

/**
 * @description Fetches the categories list from the server.
 * @module actions/getCategoriesListFromServer
 * @returns {Object} {payload: Array, message: String, error: Boolean} - The categories list
 * @exports getCategoriesListFromServer
 */
const getCategoriesListFromServer = async () => {
	try {
		//bring the collection from firebase
		const categoriesCollection = collection(db, 'categories');

		//bring the categories of the collection
		const snapshot = await getDocs(categoriesCollection);

		//snapshot returns: {docs: [all documents here], size: 0, empty: true/false}
		//we need iterate snapshot in order to obtain the categories from docs
		const categories = snapshot.docs.map((documenRef) => {
			const productData = documenRef.data(); //the
			return productData;
		});

		return {
			message: 'Categories fetched successfully',
			error: false,
			payload: categories,
		};
	} catch (error) {
		console.error('Error fetching categories:', error);
		return {
			message: 'Error fetching categories',
			error: true,
			payload: null,
		};
	}
};

export default getCategoriesListFromServer;
