/**
 * @module actions/migrateProducts
 * @description Migrate the products from the local array to the firebase database
 *
 */

import { products } from '@/assets/productsData';
import { db } from '@/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const migrateProducts = async () => {
	try {
		// Steps:
		// 1. get reference from the DB (using the 'db' variable)

		// 2. get reference to the collection of products (using the 'collection' variable). If the selected collection does not exist, as soon as something is saved in it, firebase will create it.
		const productsCollection = collection(db, 'products');

		// Verify if the collection already has documents
		const existingDocs = await getDocs(productsCollection);

		if (!existingDocs.empty) {
			console.log(
				'The "Products" collection already exists.The migration will not be performed.'
			);
			return;
		}

		// 3.go through the array of products and add each one to the fierebase in the collection selected.
		products.forEach((product) => {
			addDoc(productsCollection, product).then(() => {
				console.log('Product added', product.id);
			});
		});
	} catch (error) {
		console.error('Error during migration:', error);
	}
};
export default migrateProducts;
