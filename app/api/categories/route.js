/**
 * @module app/api/categories/route.js
 * @description This is the API route for categories
 * Implement the following routes:
 * @route GET /api/categories
 * @description Fetches the categories list from the API.
 * @route POST /api/categories
 * @returns {Object} NextResponse
 */

import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers

export const GET = async () => {
	//bring the collection from firebase
	const categoriesCollection = collection(db, 'categories');

	try {
		//bring the categories of the collection
		const snapshot = await getDocs(categoriesCollection);

		//snapshot returns: {docs: [all documents here], size: 0, empty: true/false}
		//we need iterate snapshot in order to obtain the categories from docs
		const categories = snapshot.docs.map((documenRef) => {
			const productData = documenRef.data(); //the
			return productData;
		});

		return NextResponse.json({
			message: 'Categories fetched',
			error: false,
			payload: categories,
		});
	} catch (error) {
		return NextResponse.json({
			message: 'Error fetching categories',
			error: true,
			payload: null,
		});
	}
};
