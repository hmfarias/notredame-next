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
		// Referencia a la colección en Firebase
		const productsCollection = collection(db, 'products');

		// Preparar el filtro en caso de que se reciba una categoría
		const filter = category
			? query(productsCollection, where('category', '==', category))
			: productsCollection;

		// Usar una promesa para manejar el listener de onSnapshot
		return new Promise((resolve, reject) => {
			const unsubscribe = onSnapshot(
				filter,
				(snapshot) => {
					try {
						// Procesar los documentos del snapshot
						const products = snapshot.docs.map((documenRef) => {
							const idFirebase = documenRef.id; // ID de Firebase
							const productData = documenRef.data(); // Datos del producto
							productData.id = idFirebase; // Reemplazar el ID original por el ID de Firebase
							return productData;
						});

						// Resolver la promesa con el objeto de respuesta exitosa
						resolve({
							message: 'Products fetched successfully',
							error: false,
							payload: products,
						});
					} catch (innerError) {
						console.error('Error processing snapshot:', innerError);

						// Rechazar la promesa con el objeto de error
						reject({
							message: 'Error processing products',
							error: true,
							payload: null,
						});
					}
				},
				(error) => {
					console.error('Error in onSnapshot listener:', error);

					// Rechazar la promesa con el objeto de error
					reject({
						message: 'Error fetching products',
						error: true,
						payload: null,
					});
				}
			);
		});
	} catch (outerError) {
		console.error('Error setting up onSnapshot:', outerError);

		// Retornar un objeto de error en caso de fallo general
		return {
			message: 'Error fetching products',
			error: true,
			payload: null,
		};
	}
};

export default getProductsFromServer;
