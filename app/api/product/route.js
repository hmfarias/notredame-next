/**
 * @module app/api/product/route.js
 * @description This is the API route for a product
 * Implement the following routes:
 * @route GET /api/product
 * @description Fetches one product from the API.
 * @route POST /api/product
 * @param {*} req
 * @returns {Object} NextResponse
 */

import { db } from '@/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers

export const GET = async (req) => {
	try {
		// Get the 'ID' search parameter from the URL
		const searchParams = req.nextUrl.searchParams;
		const id = Number(searchParams.get('id')); // id is a number in firebase
		console.log('🇲🇵 id:', id);
		if (!id) {
			return NextResponse.json({
				message: 'ID is required',
				error: true,
				payload: null,
			});
		}

		// Reference to the 'Products' collection in Firestore
		const productsCollection = collection(db, 'products');

		// Create a query to filter through the 'ID' field0
		const filter = query(productsCollection, where('id', '==', id));

		// Obtain documents that coincide with the filter
		const snapshot = await getDocs(filter);
		console.log('🇳🇬 SNAPSHOT:', snapshot.docs[0]);
		//Verify if there are documents in the result
		if (snapshot.empty) {
			return NextResponse.json({
				message: 'Product not found',
				error: true,
				payload: null,
			});
		}

		//snapshot returns: {docs: [all documents here], size: 0, empty: true/false ...}
		//in this case, we only have one document, so we can access it directly
		const product = snapshot.docs[0].data();
		console.log('🐦 product:', product);
		return NextResponse.json({
			message: 'Product fetched',
			error: false,
			payload: product,
		});
	} catch (error) {
		return NextResponse.json({
			message: 'Error fetching the product',
			error: true,
			payload: null,
		});
	}
};

export const POST = async (req) => {
	console.log('POST method');

	// this is how you can get the body of the request
	// fetch("url", {body: JSON.stringify({key: "value"})})
	console.log(await req.json());

	return NextResponse.json({ message: 'POST method' });
};
