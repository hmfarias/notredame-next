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
import { collection, doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers
//*************************************************
// GET one product BY ID from the database (server-side)
//************************************************/
export const GET = async (req) => {
	try {
		// Get the 'ID' search parameter from the URL
		const searchParams = req.nextUrl.searchParams;
		const id = searchParams.get('id');
		// const id = await params;
		console.log('✅ ~ GET ~ id:', id);

		if (!id) {
			return NextResponse.json(
				{
					message: 'ID is required',
					error: true,
					payload: null,
				},
				{ status: 400 } // 400 Bad Request
			);
		}

		// Reference to the 'Products' collection in Firestore
		const productsCollection = collection(db, 'products');

		// Get the document reference
		const docRef = doc(productsCollection, id);
		console.log('✅ ~ GET ~ docRef:', docRef);

		const query = await getDoc(docRef);
		console.log('✅ ~ GET ~ query:', query);
		const product = query.data();
		product.id = id;

		//Verify if there are documents in the result
		if (query.empty) {
			return NextResponse.json(
				{
					message: 'Product not found',
					error: true,
					payload: null,
				},
				{ status: 404 } // 404 Not Found
			);
		}

		return NextResponse.json(
			{
				message: 'Product fetched',
				error: false,
				payload: product,
			},
			{ status: 200 } // 200 OK
		);
	} catch (error) {
		console.error('Error fetching the product:', error);
		return NextResponse.json(
			{
				message: 'Error fetching the product',
				error: true,
				payload: null,
			},
			{ status: 500 } // 500 Internal Server Error
		);
	}
};
