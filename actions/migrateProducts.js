/**
 * @module actions/migrateProducts
 * @returns
 * @description Migra los productos que estan almacenados en un array local, hacia la nube
 *
 */

import { products } from '@/assets/productsData';
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';

const migrateProducts = async () => {
	// Steps:
	// 1. get reference from the DB (using the 'db' variable)

	// 2. get reference to the collection of products (using the 'collection' variable). If the selected collection does not exist, as soon as something is saved in it, firebase will create it.
	const productsCollection = collection(db, 'products');

	// 3.
	//go through the array of products and add each one to the firestore in the collection selected.
	products.forEach((product) => {
		addDoc(productsCollection, product).then(() => {
			console.log('Product added', product.id);
		});
	});
};
export default migrateProducts;
