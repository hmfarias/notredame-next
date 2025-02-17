import { db } from '@/firebase';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

/**
 * @description Fetches the products list from the server. If a category is provided, it fetches the products by category else it fetches all products
 * @module actions/getProductsFromServer.js
 * @returns {Object} {payload: Array, message: String, error: Boolean} - products or products by category from the API depending if recieves a category parameter
 * @exports getProducts
 * @param {String} category - The category name or null when fetching all products
 */
// const getProductsFromServer = async (category) => {
// 	try {
// 		//reference to the collection in firebase
// 		const productsCollection = collection(db, 'products');

// 		// prepare the filter in case a category is received
// 		const filter = category
// 			? query(productsCollection, where('category', '==', category))
// 			: productsCollection;

// 		//bring the products of the collection by applying the filter (if no ‘category’ is received the filter will bring all products).
// 		const snapshot = await getDocs(filter);

// 		//snapshot returns: {docs: [all documents here], size: 0, empty: true/false}
// 		//we need iterate snapshot in order to obtain the products from docs
// 		const products = snapshot.docs.map((documenRef) => {
// 			const idFirebase = documenRef.id; //the firebase id
// 			const productData = documenRef.data(); //the data corresponding to the firebase id {id, description, category, .... etc}
// 			// replace the original id from dumyJson for the firebase id
// 			productData.id = idFirebase;

// 			return productData;
// 		});

// 		return {
// 			message: 'Products fetched successfully',
// 			error: false,
// 			payload: products,
// 		};
// 	} catch (error) {
// 		console.error('Error fetching products:', error);
// 		return {
// 			message: 'Error fetching products',
// 			error: true,
// 			payload: null,
// 		};
// 	}
// };

// export default getProductsFromServer;
const getProductsFromServer = async (category) => {
	try {
		const db = getFirestore(); // Inicializa Firestore
		const productsCollection = collection(db, 'products');

		const filter = category
			? query(productsCollection, where('category', '==', category))
			: productsCollection;

		// El cambio clave: Establecer la fuente en 'server'
		const snapshot = await getDocs(filter, { source: 'server' }); // o 'cache' o 'default'

		const products = snapshot.docs.map((documenRef) => {
			const idFirebase = documenRef.id;
			const productData = documenRef.data();
			productData.id = idFirebase;
			return productData;
		});

		return {
			message: 'Products fetched successfully',
			error: false,
			payload: products,
		};
	} catch (error) {
		console.error('Error fetching products:', error);
		return {
			message: 'Error fetching products',
			error: true,
			payload: null,
		};
	}
};

export default getProductsFromServer;
