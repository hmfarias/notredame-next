import { db } from '@/firebase';
import { doc, getDoc, writeBatch } from 'firebase/firestore';

/**
 * Updates the stock of products in Firestore by subtracting the specified qty.
 * @param {Array} products - Array of objects with { id, qtyItem } properties.
 * @returns {Promise<void>} Resolves when all updates are completed.
 */
const updateStockInServer = async (products) => {
	try {
		const batch = writeBatch(db); // Create a batch operation

		for (const product of products) {
			const productRef = doc(db, 'products', product.id); // Reference to the product
			const productSnap = await getDoc(productRef); // Get product data

			if (!productSnap.exists()) {
				console.error(`Product with ID ${product.id} not found.`);
				continue; // Skip this product and continue with the next one
			}

			const currentStock = productSnap.data().stock || 0; // Get current stock
			const newStock = currentStock - product.qtyItem; // Calculate new stock

			batch.update(productRef, { stock: newStock }); // Add update to batch
		}

		await batch.commit(); // Execute all updates at once

		// showSuccessToast('Stock updated', 500);
		console.log('Stock updated successfully!');
	} catch (error) {
		// showErrorToast('Error updating stock', 500);
		console.error('Error updating stock:', error);
	}
};

export default updateStockInServer;
