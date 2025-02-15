import { categories } from '@/assets/categoriesData';
import { db } from '@/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

/**
 * @description Migrate the categories from the local array to the firebase database. It sends a POST request to the '/api/categories' endpoint with the categories array as the request body. If the request is successful, the function returns the response from the API. If there is an error, it returns an error message. It must be executed just once. If the migration is already executed, it will not be performed again.
 * @module actions/migrateCategories
 * @exports migrateCategories
 */
const migrateCategories = async () => {
	try {
		// Steps:
		// 1. get reference from the DB (using the 'db' variable)

		// 2. get reference to the collection of categories (using the 'collection' variable). If the selected collection does not exist, as soon as something is saved in it, firebase will create it.
		const categoriesCollection = collection(db, 'categories');

		// Verify if the collection already has documents
		const existingDocs = await getDocs(categoriesCollection);

		if (!existingDocs.empty) {
			console.log(
				'The "Categories" collection already exists.The migration will not be performed.'
			);
			return;
		}

		// 3.go through the array of categories and add each one to the fierebase in the collection selected.
		categories.forEach((category) => {
			addDoc(categoriesCollection, category).then(() => {
				console.log('Category added', category.slug);
			});
		});
	} catch (error) {
		console.error('Error during migration:', error);
	}
};
export default migrateCategories;
